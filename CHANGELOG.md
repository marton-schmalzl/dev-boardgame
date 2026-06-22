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

- `src/model/cards/Playable.ts`, `src/model/contracts/Contract.ts` —
  optional internal fields `candidate` and `notes` for design
  book-keeping.
- `src/components/common/CardMetaBadges.tsx` — preview-only corner
  badges (`?` for candidates, `!` with hover `title` for notes;
  `no-print` so print/PDF stays clean); wired into all card
  components.
- Phase 6 **candidate** placeholder cards: every row in
  `docs/plan/inventory.md` "Design slots" sub-tables now has a draft
  in `src/data/employees.tsx` (production + backoffice),
  `src/data/items.tsx`, `src/data/functional_contracts.tsx` (C-031–
  C-035), and `src/data/tecnical_contracts.tsx` (T-025–T-027), each
  marked `candidate: true` with `notes` citing the slot ID.
- `docs/design/balance.md` — first version of the **balance framework**:
  cost-band rule (JUNIOR 2-4, SENIOR 5+), per-cost stat-budget targets,
  copy-count curve, design-philosophy-by-cost-tier, item cost premium,
  feature / technology difficulty bands, and strategic-axis sanity
  checks. Living tuning doc next to DESIGN.md.
- `docs/plan/inventory.md` — "Design slots" sub-tables added to every
  card category (Production, Backoffice, Items, Features,
  Technologies); each row is a NEW slot with target cost / stats /
  copies / role notes, mirroring `balance.md`.

### Changed

- `src/components/common/CardMetaBadges.tsx` — designer `?` / `!`
  badges use a full circular **button** as the hover / focus target so
  the native tooltip applies to the whole control, not only the glyph.
- `src/pages/PlayableCardsPage.tsx`, `src/pages/AssignmentCardsPage.tsx`
  — preview grids sort **playable** cards by **cost** (then stable
  title/name tie-break) and **features** by **total required skill**
  (sum of the three stats, then `cardNumber`).
- `src/data/functional_contracts.tsx` — feature **balance**: story
  points aligned to `balance.md` §4.2–§4.3 (C-002 / C-011 / C-012 /
  C-017 5→4; C-007 5→6; C-025 3→5); C-021 organization requirement
  **8→7** for T3 single-stat cap; internal SP pacing `notes` removed
  from released features.
- `docs/plan/inventory.md`, `docs/plan/progress.md`,
  `docs/design/balance.md` — feature SP / tier cleanup documented;
  progress checklist marks feature pacing done.
- Phase 6 **cleanup pass (data)** — `src/data/tecnical_contracts.tsx`:
  T-012 / T-017 / T-018 `requiredSkills` raised into T1 band (~10
  total); `openSourcePrestige` 1→2 on those cards.
- Phase 6 **cleanup pass (data)** — `src/data/employees.tsx`: cost /
  tier band fixes (Kyle → JUNIOR @4; Sophia cost 5; John MVP mentor
  text + `TRAINING` value 4; Donna → JUNIOR @3; Eve / Grace / Francis
  cost 5); cost-band `notes` cleared where fixed; Francis keeps flow
  OQ note.
- Phase 6 **cleanup pass (data)** — `src/data/items.tsx`: cost-1
  premium trims (programming socks, energy drink); investment loses
  passive +💲; Pristine Programs / holy scroll / design handbook stat
  lines tightened vs `balance.md` §3.
- `docs/plan/inventory.md`, `docs/plan/progress.md`,
  `docs/design/balance.md`, `docs/design/open-questions.md` — aligned
  with the above (tier counts 9/7 production, 4/5 admin; tech / item
  notes; John OQ points at wired card text).
- `docs/plan/inventory.md` — Phase 6: counts / rows for candidate
  cards; design-slot sub-tables cross-linked to source placeholders.
  (Earlier change: previously-flagged feature candidate-cuts C-018 /
  C-019 / C-024 / C-028 / C-030 reverted to `KEEP`; deck-size scaling
  via player-count tags; active feature pool ~30 + design slots.)
- `docs/plan/progress.md` — Phase 6: cleanup checklist updated (cost
  bands / John / tech floor / item pass done; Francis flow, feature SP
  sweep, Luke/Steve/Jake notes still open).
- Preview app routing (`react-router-dom`): **Playable cards**, **Assignments**,
  and **Game board** pages; filters on card pages; **print view** (`?print=1`
  or toolbar) plus `src/styles/print.css` so PDF export hides chrome; A2
  landscape board sketch (594×420 mm) with hire/assignment/item zones showing
  market + supply slots (except prestige: single face-up pile), compact 12-space
  project ring; dev-only `cardDataDevChecks` for
  duplicate `cardNumber` and empty `photoSrc`; `TechnologyCard` top/bottom
  layout and empty-`photoSrc` placeholder; `translate.ts` `tr()` returns only
  string `en` values.
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

### Changed

- `src/index.css` — Feature / Technology **landscape** dimensions (
  `--spacing-card-w` / `--spacing-card-h`) set to standard playing-card
  landscape **88.9×63.5 mm** (was 127×88.9 mm); game board assignment slots use
  the same CSS variables.
- Optional **`printCount`** on `Playable` and `Contract` (`src/model/`): Print
  view repeats each card that many times (`copiesForPrint` in
  `src/lib/printCopies.ts`); playable and assignment pages consume it.
- `TechnologyCard` — removed dashed divider between top and bottom halves.
- `src/data/prestige_employees.tsx` — Abilities text states **+5 prestige** at
  end of game; `printCount: 10` for PDF repeats; `docs/plan/inventory.md` row
  aligned.
- `.cursor/rules/card-data-conventions.mdc` — `printCount` note; end-game
  prestige in `text` when players need an explicit reminder.
- `src/lib/constants.ts` — `MAX_PLAYER_COUNT` (3 for MVP),
  `SUPPORTED_MAX_PLAYERS` (4), and starter intern counts **3 Dev + 6 HR** per
  seat (`STARTER_*_INTERNS_PER_PLAYER`); `starter_employees` `printCount` uses
  these with `MAX_PLAYER_COUNT` (1 CEO per seat). (Renamed from
  `maxPlayers.ts`.)
- Starter intern mix: **3 Dev + 6 HR** per player (was 5 + 4) for faster early
  +1 BUDGET / hire flow — `DESIGN.md`, DDR-0012, `open-questions.md`,
  `inventory.md`, `MVP_PLAN.md`.

- `docs/plan/progress.md` — game board checkpoint marked **open** (incomplete;
  physical iteration first); TechnologyCard progress line matches current UI.
- `GameBoardPage` — screen-only note that the mat is a rough placeholder
  pending table tests / sharpie iteration.

### Deprecated

- `BASE_RULES.txt` — canonical-source role handed over to DESIGN.md. A
  banner is added at the top.
- `formatted_rules.html` — same as above.

### Decided

All DDR-0001 … DDR-0012 backfills — retroactively formalized earlier informal
design decisions, supplemented with legacy-intent details captured from the
designer (e.g., the original purpose of the Medior tier, the anti-runaway
goal of Government Project).

### Open Question

- Items split — equippable vs general / play-then-discard items. MVP
  default: stay equippable-only, revisit post-playtest #1. Documented
  in `docs/design/open-questions.md` → "Items split".
- Player-count contract tags — proposal to control deck size via a
  per-contract minimum-player-count tag (e.g. `2P+` / `3P+` / `4P
  only`) instead of cutting uniques. MVP default: untagged. Documented
  in `docs/design/open-questions.md` → "Player-count contract tags".
- John (Mentor) ability post-Medior — what replaces "hire a medior
  programmer for free"? Working proposal documented in
  `docs/design/open-questions.md`.
- Luke (Copycat) — does "copy stats" include equipped items? MVP
  default: no.
- Francis (Contracting Coordinator) flow — hire-source, target zone,
  and "at the end" timing all underspecified. MVP defaults documented.

### Added

- `IDEAS.md` entry: "Generic interaction tokens" — captures the
  marker-mechanic idea that drove the original T-007 design, so it can
  be revisited once a shared token economy justifies including tokens
  in the box.
- Phase 3 — new content:
  - `src/data/prestige_employees.tsx` (new file) — Prestige Employee
    realized as **"Someone's Nephew"** (cost 7, +5 prestige, no in-game
    effect, 10 copies, 1 permanent market slot). DDR-0009 implementation;
    pure money-dump themed as the boss's nepotism hire.
  - `src/data/tecnical_contracts.tsx` — 6 new technologies designed to
    bring active uniques from 15 → **21** (target band 20-24):
    - T-019 Mobile App — completionEffects: ➕💲💲💲. Top: ➕💲 on
      FeatureCompletion. Bottom: ➕🗒️ on FeatureAssignment. Skill
      total 13 → ⭐⭐⭐.
    - T-020 Search / SEO Indexing — top: scout 3 contracts on
      FeatureCompletion. Bottom: ➕💡 on FeatureAssignment. Skill
      total 13 → ⭐⭐⭐.
    - T-021 Recruiting Automation (user-designed) — top: the first
      time you hire each turn, gain ➕💲 (refund — equivalent to a
      1-budget discount, expressed as a Hire trigger with BUDGET +1,
      multiUse:false). Bottom: on employee market refill, look at
      top 2, put 1 on bottom, refill with the other. Skill total
      11 → ⭐⭐⭐. Renamed from "Headhunting Database" to avoid name
      collision with T-016 (Headhunting algorithms). The bottom
      trigger uses "NONE" as a placeholder — no native enum for
      "on market refill"; canonical text is the rule (DDR-0011).
    - T-022 A/B Testing Framework — top: ➕⭐ on FeatureCompletion;
      bottom: ➕💡 on FeatureAssignment. Skill total 12 → ⭐⭐⭐.
    - T-023 Tech Blog — top: ➕⭐ on TechCompletion (any); bottom:
      ➕💡 on TechAssignment (any). Skill total 12 → ⭐⭐⭐.
    - T-024 Open Source License — top: ➕⭐⭐ on Open Source
      TechCompletion; bottom: ➕⚙️➕💡 on TechAssignment (any). Skill
      total 8 → ⭐⭐. Intentional synergy with T-013 / T-023.
  - `docs/design/DESIGN.md` §4 — "Reference card layout" subsection
    added: the Project Track is realized as a single shared hand-drawn
    reference card with the placeholder scale spelled out at the table.

### Changed

- All previously written project documentation translated to English; English
  is now the working language for project docs going forward.
- Phase 3 — new content:
  - `src/data/starter_employees.tsx`:
    - CEO `effects` finalized to match the canonical card text:
      `[BUDGET +2, SCOUT_CONTRACTS 3, PURGE_CONTRACT 1]` (was a
      commented-out placeholder; ability text itself unchanged).
      Stats stay 2/2/2, level SENIOR, cost 0, prestige 0. See
      [open-questions → CEO ability for MVP](docs/design/open-questions.md#ceo-ability-for-mvp)
      (status now resolved).
    - HR Intern `effects` wired up to `[BUDGET +1]` so the data matches
      the canonical text (was previously commented out). Stats made
      explicit zeros.
    - Dev Intern `effects: []` and `text: {}` — explicit empty values
      replacing commented-out placeholders.
  - `docs/design/open-questions.md`: CEO ability for MVP question
    marked **resolved** with the chosen text and a note on what to
    drop first if it tests too strong.
  - `docs/plan/inventory.md`: starter section closed (Dev Intern × 5,
    HR Intern × 4, CEO × 1 per player); Prestige Employee row
    concretized (Tech Evangelist); 6 new tech rows added; Phase 3
    target met (21 active uniques in the 20-24 band).
- Phase 4 — Technology rework:
  - `src/model/contracts/Contract.ts`: `Technology.openSourcePrestige`
    is now **required** (was optional). Every active technology must
    declare its publish-prestige value so the open-source mechanic is
    well-defined.
  - `src/data/tecnical_contracts.tsx`: `openSourcePrestige` set on all
    16 active tech cards. Values seeded roughly proportional to
    required-skill total, with a small premium for the hardest cards
    (mapping in `docs/design/open-questions.md`). Range: 1-5 ⭐.
  - `docs/design/decisions/0010-tech-private-vs-opensource-cover-half.md`:
    "Open questions" entry on publish-prestige value marked **resolved**;
    documented the per-card mapping rule.
  - `docs/design/DESIGN.md` §6.6: open-source publish prestige is now
    described as a required, card-specific field rather than a single
    placeholder default.
  - `src/data/tecnical_contracts.tsx`:
    - T-004 Automated Testing **commented out** (CUT for MVP) — both
      halves used undefined trigger types (`TEST_RUN`, `BUG_FIX`) and
      the effect arrays were already empty.
    - T-007 Machine Learning Algorithms **commented out** (CUT for
      MVP) — top "+⭐ at end of game" wasn't ongoing; the bottom
      marker mechanic doesn't fit MVP component scope.
    - T-006 Cloud Infrastructure: dropped the
      `completionEffects: [{ effectType: "BUDGET", value: -2 }]`
      penalty (bug — no other tech has a completion cost).
    - T-010 renamed `'Design handbook'` → `'Design system'` (avoid
      name collision with the item of the same name).
    - T-013 Code sharing platform: bottom prestige value `2` → `3`
      to match canonical text "+⭐⭐⭐" (DDR-0011).
    - T-017 Custom font: descriptions rewritten to match data —
      top `'Gain ➕🗒️ towards each assignment'`, bottom `'Gain
      ➕💡💡 towards an assignment with 💡 requirement of 6 or
      higher'`. Was previously using ⭐ icons that didn't match the
      stat-bonus effects.
    - Duplicate `T-017` resolved: Spreadsheet macros renumbered to
      `T-018`; Custom font keeps `T-017`.
    - Typos fixed in T-013, T-014, T-015 (`assginment` → `assignment`,
      `assing` → `assign`).
  - `docs/design/decisions/0010-tech-private-vs-opensource-cover-half.md`:
    clarification added — an empty ("do-nothing") TOP half is
    explicitly permitted; thematically, such cards have zero
    long-term contribution once covered.
  - `docs/design/DESIGN.md` §6.6 updated to mention the empty-top
    allowance.
  - `docs/plan/MVP_PLAN.md`: Phase 4 target adjusted to **20-24
    unique** (1 copy each, variety-over-duplication for the
    playtest); Phase 3 gains a new step to design 5-9 new tech
    cards to fill the gap from the 15 active uniques produced by
    Phase 4. Cuts are commented out in place; cardNumber slots are
    not reused (final resequencing happens close to release).
- Phase 2 — card content audit:
  - `src/data/employees.tsx` — `employees`: Jake (MEDIOR → SENIOR),
    Diego (MEDIOR → JUNIOR), Sophia (MEDIOR → SENIOR). Final
    Junior/Senior balance is 8 / 8 (DDR-0005).
  - `src/data/employees.tsx` — `backoffice`: every card now carries a
    `level` field (Tina / Alice / Ahmed → JUNIOR; Charles / Donna /
    Eve / Francis / Grace / Haruto → SENIOR).
  - `src/model/cards/Person.ts`: `Person.level?: Level` added so admin
    employees can carry a tier without making it required for any
    future ungraded card. `Programmer` continues to require `level`.
  - `src/data/items.tsx`: typos fixed — `'Energy drinnk'` → `'Energy
    drink'`; `'A famout book by Uncle Rob'` → `'A famous book by
    Uncle Rob'`.
  - `src/data/functional_contracts.tsx`: typos fixed — C-021 flavor
    `'everythinh'` → `'everything'`; C-022 flavor `'Differnces'` →
    `'Differences'`.
  - `docs/plan/MVP_PLAN.md` Phase 2 wording: the `sector` field on
    `Contract` is **kept** in the data and stays optional in the
    model (inactive for MVP per DDR-0006), so the mechanic can be
    revisited post-MVP without re-tagging cards.
  - `docs/plan/inventory.md` rewritten with concrete `KEEP` / `REWORK`
    / `?` statuses and placeholder copy counts for every existing
    card across employees, admin, items, and features. Technology
    audit deferred to Phase 4.
- `docs/design/DESIGN.md` Phase 1 polish:
  - §3 Setup rewritten as a self-contained, table-ready 10-step procedure
    with explicit starting space, inline market slot counts, and explicit
    starter-deck shuffle / opening-hand instructions.
  - Every placeholder value (Project Track scale, hire / item / assignment
    market slot counts, Dev/HR ratio, Prestige Employee cost & copy count,
    open-source publish prestige, end-game prestige threshold) now links
    inline to its specific entry in `open-questions.md`.
  - Missing DDR cross-references added in §2 (DDR-0004 on Project Track
    reference card), §3 Setup (DDR-0003, DDR-0009, DDR-0010, DDR-0012),
    §5 Turn structure (DDR-0003, DDR-0009, DDR-0010), §7 End game
    (DDR-0008, DDR-0009).
