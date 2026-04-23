# Balance Framework

Status: living document. This is a **tuning** doc, not a structural one — it
establishes per-cost-tier numeric targets, role-coverage matrices, and
difficulty bands that the card pool should approximately conform to. It is
not a DDR; it cites the relevant DDRs where they exist.

The framework targets the **final product**. Implementation may temporarily
print extra copies of an adjacent unique when a designed slot has no card
concept yet — see `Implementation fallback` below.

Source of truth for game rules remains [`DESIGN.md`](DESIGN.md). Card-level
inventory and per-card status live in
[`../plan/inventory.md`](../plan/inventory.md) (the "Design slots" sub-tables
mirror the slots listed here).

---

## 1. Production Employees

### 1.1. Cost-band rule (hard)

- **Junior cost band: 2-4.** No cost-1 juniors (would not be meaningfully
  different from interns; a late-game draw would be dead weight).
- **Senior cost band: 5+.** Anything at cost 5 or above is SENIOR by
  definition.
- Existing cards that violate the band are flagged for the cleanup pass
  (see `inventory.md`); typical resolution is reclassification (Kyle SENIOR
  cost 4 → JUNIOR) or cost-bump (Sophia SENIOR cost 4 → SENIOR cost 5).

See DDR-0005 for the JUNIOR / SENIOR tier definitions (Medior is removed for
MVP).

### 1.2. Cost → stat-total budget

Single-copy stats, no ability premium:

- **Junior**: target ~**2 stats per 1 BUDGET** of cost.
  - Cost 2 → 4 total | Cost 3 → 6 | Cost 4 → 8.
- **Senior**: target ~**2.0-2.4 stats per 1 BUDGET** of cost, depending on
  ability strength.
  - Cost 5 → 10-12 | Cost 6 → 12-14 | Cost 7 → 14-16 | Cost 8 → 16-18.

Ability premium / drawback adjustment:

- A meaningful active ability (extra progress, prestige, draw, etc.)
  reduces the stat budget by ~2-3.
- A pure drawback (Jake, Steve) raises the stat budget by ~3-5.
- A balanced no-ability card hits the upper edge.

### 1.3. Copy-count curve

- **Junior**: 2-3 copies per unique. Lower-cost juniors (cost 2-3) lean to
  3 copies for early-game predictability; cost-4 juniors stay at 2.
- **Senior**: 1-2 copies per unique. Cost-5 / cost-6 lean to 2 copies
  (saturated low senior pool); cost-7 and cost-8 are **single copy each**
  but **multi-unique** — the super-senior tier should feel varied when one
  shows up, not always the same card.

### 1.4. Reuse and near-variants

When an archetype has a clear identity (e.g. "+2 BUDGET, weak ability,
HR-style backoffice"), it is acceptable to ship **near-variants**: multiple
uniques sharing the same role with small flavour / trigger differences,
instead of just printing more copies of one card.

### 1.5. Implementation fallback

If a designed unique slot doesn't have a card concept yet at execution
time, the placeholder is to print extra copies of an **adjacent unique**
(same cost, similar role) until a real concept lands. The plan numbers
should not be trimmed because of design-time bottlenecks.

### 1.6. Design philosophy by cost tier

- **Cost 2-3 (junior, low senior)** — "meat and potatoes". Stat-shape
  variety only. Reuse existing simple effects (small bonus on assignment,
  weak triggers, no abilities). Players should not need to learn a new
  mechanic when a low-cost card hits the table.
- **Cost 4-5** — saturate **existing** triggered-ability templates (e.g.
  "when assigned alongside a senior", "when completing an assignment with
  X requirement"). New variants of known patterns, not new patterns.
- **Cost 6+** — complexity budget lives here. Strategy-defining abilities,
  strong synergies, drawback-and-payoff designs. Each cost-7/8 card should
  feel like an event when drawn.

### 1.7. Stat-focus axes

Every cost tier should have at minimum: 1 balanced, 1 knowledge-focus, 1
creativity-focus, 1 organization-focus card. "Focus" = ~50%+ of the stat
budget concentrated on one stat.

### 1.8. Total-stats parity

The pool's **total stats summed across all cards × copies** should be
roughly equal across the three stats (KNOWLEDGE / CREATIVITY /
ORGANIZATION). The current pool is knowledge-skewed (cre 36 / kn 46 /
org 43, single-copy totals); the design slots in `inventory.md` push the
pool back toward parity.

---

## 2. Backoffice (Admin) Employees

### 2.1. Cost-band rule

Same as production: **Junior 2-4, Senior 5+.** No cost-1 backoffice.
Existing-card violators are flagged for the cleanup pass in
`inventory.md`.

### 2.2. Budget access vs. cost

Budget output per BUDGET-of-cost should sit in three bands by utility
density:

- **0.0-0.3 BUDGET / cost** → must carry strong utility (deck culling,
  market manipulation, draw, recursion, etc.).
- **0.4-0.6** → moderate utility + small budget.
- **0.7+** → mostly budget, weak or no utility.

Examples in the existing pool:
- Charles 4/5 = 0.8 (pure budget).
- Haruto 5/7 = 0.71 (budget + small utility).
- Donna 0/3 = 0.0 (pure utility).
- Grace 0/4 = 0.0 (pure utility).

### 2.3. Copy-count curve

Same shape as production: junior backoffice 2-3 copies (cost-2 → 3,
cost-3/4 → 2); senior backoffice 1-2 copies (cost-5/6 → 2, cost-7/8 → 1
each, but multi-unique).

Near-variant strategy applies especially well here — multiple "+2 BUDGET +
small kicker" junior backoffice cards are fine, since the role is
intentionally similar.

### 2.4. Utility coverage

Required utility roles in the backoffice pool (the design slots in
`inventory.md` fill the gaps):

- BUDGET generation (covered: heavy).
- Dismiss / cull (covered: Tina, Eve, Haruto).
- Scout contracts (covered: Donna + CEO).
- Scout employees (covered: Grace).
- Buy-to-top-of-deck (covered: Alice).
- **Item market manipulation** (gap).
- **Card draw** — true draw, not "draw until employee" (gap).
- **Discard recursion** — pull a card back from discard (gap).
- **Hire discount / cost reduction** for the turn (gap).
- **Indirect acceleration** — once-per-turn "this turn an assignment
  requires 1 less of X", without being a Technology (gap).

### 2.5. Design philosophy by cost tier

Same shape as production §1.6: low costs reuse known templates, complexity
lives at cost 6+.

---

## 3. Items (equippable, MVP scope)

The split into equippable vs. general / play-then-discard items is **out
of scope** for this framework — it is logged as an open question (see
`open-questions.md` → "Items split"). Until that decision lands, all items
are equippable.

### 3.1. Cost → stat-bonus budget

Items pay a **~0.5x premium** vs. employees (high cost vs. raw stats),
because they break the deck economy: items don't count against the hand
limit and equip on top of an employee's own contribution.

- Cost 1 → 2 stats total, OR +1 BUDGET, OR 1 small trigger.
- Cost 2 → 3 stats total, OR +2-budget effect (incl. destroy-for-budget).
- Cost 3 → 4 stats total, OR a wildcard non-stat utility (currently the
  empty cost band in the existing pool).
- Cost 4 → 5 stats total + small kicker, OR 5+ end-game prestige.

Items are also the place to put **wildcard effects** that don't make sense
on employees (e.g. one-shot deck manipulation, market scout, conditional
budget bursts).

---

## 4. Contracts — Features

Per the design pillars (DESIGN.md §1, DDR-0004): features are the default
prestige engine via the Project Track; they should be completable from a
single 5-employee hand at all difficulty tiers.

### 4.1. Reference hand budgets

Raw stat budgets a 5-employee hand can produce, **without items, tech, or
ability triggers**:

| Hand composition                          | Single-stat ceiling |
|-------------------------------------------|---------------------|
| 5 interns (3 Dev / 2 HR or worse)         | ~3                  |
| 5 cheap juniors                           | ~10-12              |
| 4 juniors + 1 mid senior                  | ~14-16              |
| 1 high senior + 2 juniors                 | ~12-14              |
| 2 high seniors                            | ~18-22              |

### 4.2. Feature difficulty bands

Target ~30 active features for the first playtest (no preemptive
cuts — see `inventory.md`). Deck-size scaling for higher player
counts is handled by the player-count tag system (see
[`open-questions.md`](open-questions.md) → "Player-count contract
tags"), **not** by trimming the unique pool. Targets below describe
the desired *shape* of the distribution, not a hard cap; rebalance
through tagging or post-playtest cuts.

| Tier | Skill total | Single-stat max | Reference hand                                | Target count |
|------|-------------|------------------|------------------------------------------------|---------------|
| 1 — Easy       | 4-6   | ≤4 | Interns + 1-2 juniors                                     | 6-8           |
| 2 — Standard   | 7-9   | ≤6 | Junior-heavy hand                                         | 8-10          |
| 3 — Demanding  | 10-12 | ≤7 | Senior + helpers, OR 4-5 stat-focused juniors             | 8-10          |
| 4 — Hard       | 13-15 | ≤8 | Senior + supporting juniors, OR 2 mid seniors             | 3-4           |

### 4.3. Story-point pacing

- Tier 1 → 2-3 SP.
- Tier 2 → 3-4 SP.
- Tier 3 → 4-6 SP.
- Tier 4 → 6-8 SP.

Existing values get audited against this in the cleanup pass (separate
from this framework).

---

## 5. Contracts — Technologies

### 5.1. Tech floor

Per the user brief: tech requirements should sit **above** the easiest
features. Even the cheapest tech should require at least a cheap senior or
a perfect junior setup; clearing multiple techs from a single hand should
be a rare late-game occurrence. Persistent bonuses from previously-built
techs should be treated as **accelerators**, not requirements (so the
floor is set assuming none of them are active).

### 5.2. Tech difficulty bands

| Tier | Skill total | Reference hand                                               |
|------|-------------|--------------------------------------------------------------|
| T1 — Light    | 9-11  | Cheap senior + helpers, OR a perfect stat-focused junior hand        |
| T2 — Standard | 12-14 | Mid senior + 2-3 supporters                                          |
| T3 — Major    | 15-17 | High senior + supporters, OR multiple mid seniors                    |
| T4 — Capstone | 18+   | Multiple seniors, late game; should be rare                          |

T-012 (Logging, total 4), T-017 (Custom font, total 5), and T-018
(Spreadsheet macros, total 5) sit below the T1 floor and are flagged for
the cleanup pass.

### 5.3. Open-source publish prestige

`openSourcePrestige` is required on every Technology. Initial values are
roughly proportional to the required-skill total — see `open-questions.md`
→ "Open-source publish prestige value" for the active mapping. The
balance pass does not change these; they are tuned by playtest.

---

## 6. Strategic-axis sanity checks

The framework keeps the user's strategic spine intact:

- Per-hand stat output for a "default workforce" puts feature development
  (Tier 2-3) clearly within a single hand → progress-track scoring is the
  default engine (DESIGN.md §4).
- The tech floor (T1 = ~10 stat total) means a single hand can complete a
  tech only with a senior or a stat-focused full hand → tech is still an
  investment, not a free pivot (DDR-0010).
- Open-source publish prestige stays per-card and unchanged by this pass.
- Prestige-employee pricing (cost 7 / +5 prestige) intentionally sits at
  the high end of the senior cost curve; budget strategies remain a
  high-risk, high-investment alternative (DDR-0009).
- Strategic diversity is enforced by the **role coverage matrices** (every
  cost × focus has a body), not by individual breakout cards.

---

## 7. How the design-slot tables are kept in sync

- This file holds the **framework**: rules, bands, philosophy.
- [`inventory.md`](../plan/inventory.md) holds the **slots**: per-category
  sub-tables listing each hole as a NEW row with target stats, cost, and
  copies.
- When a slot is filled by a real card, its row in `inventory.md` is
  promoted from `NEW` to a real entry (with name, photo, etc.) — the
  framework here does not need to change.
- When the framework itself is revised (e.g. cost bands shift after
  playtest #1), update this file and a CHANGELOG entry; only re-flow
  slots in `inventory.md` if the change invalidates existing slot
  targets.
