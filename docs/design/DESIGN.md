# DEV_GAME — Design Document

**Status**: living document — first MVP-targeted synthesis.
**Canonical**: this file is the single source of truth for game rules.
`BASE_RULES.txt` and `formatted_rules.html` are deprecated and have only
historical value.

Detailed rationale and considered alternatives live in the DDRs in the
[`decisions/`](decisions/) folder. Each section here cites the relevant DDR;
to make a substantive change, look at the DDR first, and supersede it with a
new DDR if the change is structural.

Open numeric values and playtest-pending details, with placeholder defaults,
are kept in [`open-questions.md`](open-questions.md).

---

## 1. Vision and design pillars

In DEV_GAME you play as the **CEO of a tech company**, building and running
your business. You hire employees, equip them with personal items, and ship
projects. Goal: collect the most **PRESTIGE** by the end of the game.

### Pillars

1. **Deck = your company** (DDR-0001, DDR-0002). Every card in your deck is a
   concrete person or piece of equipment in your company.
2. **Theme-driven interaction** (DDR-0003). Markets are shared, assignments
   are public, and published open-source technologies benefit everyone —
   competition and cooperation at once.
3. **Two viable strategies** (DDR-0004): a small focused company (frequent
   small releases) or a large bureaucratic company (deep deck, rare but big
   releases). The non-linear Project Track makes both viable.
4. **Not just a Dominion reskin**: the theme shows up mechanically (e.g.,
   open-source publishing vs. closed-source, "hype dies down" via the
   cover-half mechanic — DDR-0010).

---

## 2. Components

### 2.1. Per-player components

- **Starter deck**: 1 CEO + 9 interns (DDR-0012). Default split:
  5 Dev Interns + 4 HR Interns — placeholder, see
  [open-questions.md → Dev / HR ratio](open-questions.md#dev-intern--hr-intern-ratio).
- **Project Track marker**: a personal marker placed on the shared Project
  Track at the starting space (Track described in §4).
- **Play area**: holds cards played this turn, employees assigned to
  assignments, and private Technology cards.
- **Discard pile** and **deck**: where played / used cards go.

### 2.2. Shared components

- **Hire market** (DDR-0003), 5 rows. Slot counts are placeholders, see
  [open-questions.md → Hire market slots](open-questions.md#hire-market-slots-per-row):
  - Junior Production (default 4 slots)
  - Senior Production (default 3 slots)
  - Junior Admin (default 4 slots)
  - Senior Admin (default 3 slots)
  - Prestige Employee (1 slot — DDR-0009)
- **Item market** (DDR-0003): default 2 slots, from a shared deck —
  placeholder, see
  [open-questions.md → Item market](open-questions.md#item-market).
- **Assignment market** (DDR-0003): 3 Feature slots + 3 Technology slots,
  from two separate decks — placeholder, see
  [open-questions.md → Assignment market](open-questions.md#assignment-market).
- **Open Source Technology zone** (DDR-0010): a horizontal column where
  published techs overlap each other. Empty at start.
- **Project Track reference card**: a shared reference for the non-linear
  scale (DDR-0004; values in
  [open-questions.md → Project Track scale](open-questions.md#project-track-scale)).
- **Prestige tracker** per player (a marker on a track, or written down).

---

## 3. Setup

The shared market layout (DDR-0003) and the Open Source zone (DDR-0010) are
laid out on the table; each player gets their own starter deck (DDR-0012)
and their own Project Track marker.

1. **Place the Project Track reference card** in the middle of the table.
   Each player puts their personal marker on **space 1** (the starting
   space).
2. **Place the Open Source Technology zone**: a clear, horizontal area
   next to the assignment market. Empty at start.
3. **Build the Prestige Employee deck**: shuffle ~10 copies of the single
   Prestige Employee card (DDR-0009; copy count is placeholder, see
   [open-questions.md → Prestige Employee cost / value](open-questions.md#prestige-employee-cost--value)).
   Reveal the top card into the **1-slot Prestige Employee market**.
4. **Build and fill the Hire market** rows from the corresponding decks
   (placeholder slot counts in §2.2):
   - Junior Production deck → fill 4 slots.
   - Senior Production deck → fill 3 slots.
   - Junior Admin deck → fill 4 slots.
   - Senior Admin deck → fill 3 slots.
   If a hire deck has fewer cards than its slot count, fill what is
   available; empty slots stay empty (no replacement).
5. **Build and fill the Item market**: shuffle the item deck and reveal
   2 cards into the item market.
6. **Build and fill the Assignment market**: shuffle the Feature deck and
   the Technology deck **separately**; reveal 3 Features and 3
   Technologies into two distinct rows.
7. **Each player builds their starter deck**: take 1 CEO and 9 interns
   (default 5 Dev + 4 HR), shuffle them face-down. This is your starter
   deck.
8. **Each player draws an opening hand of 5 employees** from the top of
   their starter deck (the starter deck contains no items, so the regular
   "items don't count against the limit" rule of §5.4 is trivially
   satisfied).
9. **Set the Prestige tracker to 0** for every player.
10. **Pick a starting player** by any agreed-upon method (age, last
    deploy to production, die roll, …).

---

## 4. Project Track and scoring

The **Project Track** is a non-linear prestige scale (DDR-0004). The MVP
placeholder scale below is tunable; see
[open-questions.md → Project Track scale](open-questions.md#project-track-scale):

```
Space:    1  2  3  4  5  6  7  8  9 10 11 12+
Prestige: 0  0  1  1  2  2  3  4  5  6  7  8
```

Every completed Feature gives **PROGRESS** on the Track (the Feature's
`storyPoints` value). The marker advances accordingly.

### Project Release

Triggers when, and only when, the player's deck **runs out** (during their
own turn or in cleanup):

1. The discard pile is reshuffled into a new deck.
2. The player **gains the PRESTIGE value of the Project Track's current
   space**.
3. The marker resets to the **first space**.
4. The turn continues (if the deck-out happened during a draw, the draw
   completes from the new deck).

### Track maximum

If the marker reaches the end of the Track (12+), it stops there. There is
no "Government Project" or other extra (DDR-0008).

---

## 5. Turn structure

A turn has two phases: **Main Phase**, then **Cleanup Phase**. **Project
Release** is a trigger that may fire any time the deck runs out.

### 5.1. Main Phase

The player may take the following actions in **any order**, as **many times
as the cards allow**:

#### Play Employee
- Plays an employee card from hand into the play area.
- The **on-play effect** triggers immediately (stats apply, budget is
  generated, card-text effects activate).
- The card stays in the play area until the end of the turn (or until sent
  to an assignment).

#### Equip Item
- When playing an employee (or later, if the card permits), the player may
  attach an item card from hand.
- An employee can hold at most **1 item**.
- The item's stats and effects add to the employee.
- If the employee leaves the play area (assigned, or end of turn), the item
  goes with it (to discard or to the assignment slot).

#### Activate Ability
- Cards in the play area may have abilities that can be activated (default:
  once per turn unless the card says otherwise).

#### Use Budget — Buy
- Spend generated BUDGET to buy from the shared markets (DDR-0003):
  - Hire market: a new employee → discard pile (default), or to the top of
    the deck via a special ability.
  - Item market: a new item → discard pile.
  - Prestige Employee slot (DDR-0009): expensive, no in-game effect,
    end-game prestige.
- An emptied slot **immediately** refills from the corresponding deck.
- If a hire deck runs out, that slot stays empty (no replacement).

#### Assign to Assignment
- Production employees in the play area may be assigned to a card in the
  shared assignment market (Feature or Technology).
- Multiple employees can be assigned to a single assignment.
- An employee can be assigned once per assignment (cannot be pulled back
  during the turn — see `open-questions.md`).
- Items go with their employee onto the assignment.
- Multiple players' employees may be on the same assignment **at the same
  time**; the player whose contribution finally meets the requirement
  completes it.

#### Complete Assignment
- If the combined stats of employees on an assignment meet the requirement
  in all three stats (KNOWLEDGE / CREATIVITY / ORGANIZATION), the
  assignment is **completed**.
- The assignment leaves the market, and:
  - **Feature**: the completing player gains the `storyPoints` value on the
    Project Track + any completion bonus. The Feature goes to a personal
    completed pile (used for end-game tie-break).
  - **Technology** (DDR-0010): the completing player decides whether to
    place it as **private or public** (see §6.6). Bottom-half progress
    applies if the card has any.
- All employees and items on the assignment go to the completing player's
  discard pile.
- Other players' employees that were previously placed on this assignment
  (placeholder rule — see `open-questions.md`): default is they return to
  their owners' discard piles without disrupting the main flow; **exact
  rule TBD by playtest**.
- The empty assignment slot **immediately** refills.

### 5.2. Cleanup Phase

1. Discard everything in the play area.
2. Discard items remaining in hand.
3. **Optionally** discard any number of remaining employees from hand.
   If you keep any employees:
   - **Reveal** them (you must show other players that you didn't keep
     items).
   - The kept employees **count against your employee draw limit** (see
     below).
4. Draw:
   - Draw up to **5 employees** in hand (counting kept ones).
   - Items **do not count** against this limit.
   - Hand cap **10 cards**: if you have 5 employees + 6+ items, discard
     items down to 10.

### 5.3. Project Release trigger

If during the above draw (or at any time during the turn) the deck runs
out and you still need to draw:

1. Run **Project Release** (see §4).
2. After the reshuffle, continue drawing until you reach 5 employees.
3. The turn continues if you were still in Main Phase; if it happened in
   cleanup, the turn ends afterward.

### 5.4. Hand size

The hand size at the start of the turn is **5 employees**. Items are extra
slots, not counted against the 5.

---

## 6. Card types

### 6.1. Production Employee (Junior / Senior — DDR-0005)

- **Stats**: KNOWLEDGE ⚙️, CREATIVITY 💡, ORGANIZATION 🗒️.
- **Cost**: in BUDGET.
- **Ability** (optional): on-play, conditional, or assignment-trigger.
- Junior Production: lower stats, lower cost, weak or no ability. Early-game
  backbone.
- Senior Production: higher stats, higher cost, often unique / strategy-
  defining ability. Mid- to late-game pillar.
- The `MEDIOR` level is **gone** for MVP (see DDR-0005).

### 6.2. Administrative Employee (Junior / Senior)

- **Stats**: typically none (or minimal); usually cannot be assigned.
- **Cost**: in BUDGET.
- **Effect**: BUDGET generation, market manipulation, dismiss / purge,
  scout / search.
- Junior Admin: small utility (+1-2 budget, small ability). Cheap.
- Senior Admin: bigger utility (more budget, stronger manipulation).

### 6.3. Prestige Employee (DDR-0009)

- 1 unique card for MVP, ~10 copies in the deck, 1 market slot.
- Cost, end-of-game prestige value, and copy count are placeholders, see
  [open-questions.md → Prestige Employee cost / value](open-questions.md#prestige-employee-cost--value)
  (defaults: cost 7, +5 prestige end-of-game, 10 copies).
- In-game effect: none.
- Running this deck out is an **end-game trigger** (see §7).

### 6.4. Item

- Equipped to an employee (1 / employee).
- Cannot be activated standalone.
- Effect kinds: stat bonus, budget, prestige, or active ability.
- The item moves with its employee (to assignment, to discard).

### 6.5. Feature (Assignment)

- **Required stats**: a value in each of KNOWLEDGE / CREATIVITY /
  ORGANIZATION.
- **Story points**: added to the completing player's Project Track at
  completion.
- **Optional completion bonus**: a one-shot effect at completion.
- The `sector` field is ignored for MVP (DDR-0006).

### 6.6. Technology (Assignment)

- **Required stats**: same idea as Features.
- **Story points**: minimal or 0 (techs give ongoing effects rather than
  progress).
- **Top half**: an ongoing effect that is **always active** while the tech
  is in your play area or in the Open Source zone (covered or not) —
  DDR-0010. May be intentionally **empty** ("do-nothing"); thematically
  this means the published tech has no lasting impact once the hype
  fades. See DDR-0010 § "Clarification — empty top half is allowed".
- **Bottom half**: an ongoing effect that is **only active** while the tech
  is private with you, **or** while it is the **most recent** card in the
  Open Source zone.
- **Open source publish prestige**: **required, card-specific** field
  (`openSourcePrestige`). Initial values are roughly proportional to the
  card's required-skill total (lower-effort techs ≈ 1, mid ≈ 3, hardest
  ≈ 5). Subject to balance tuning — see
  [open-questions.md → Open-source publish prestige value](open-questions.md#open-source-publish-prestige-value).
- At **completion**, the completing player chooses:
  - **Private**: card goes to their play area, both halves active for them
    only.
  - **Public (open source)**: card goes to the shared Open Source zone in
    the most-recent position; the completing player gains immediate
    prestige; the previous most-recent tech has its bottom half **covered**.

The `MEDIOR` level, the `Industry` field (DDR-0006), and the `Hobby` field
(DDR-0007) are **inactive** for MVP.

---

## 7. End game

The game ends when any of the following becomes true:

- A player reaches the **prestige threshold** — placeholder, see
  [open-questions.md → End-game prestige threshold](open-questions.md#end-game-prestige-threshold)
  (defaults: 30 / 25 / 20 depending on player count).
- The **Prestige Employee deck runs out** (DDR-0009).
- Either **assignment deck runs out** (Feature or Technology).
- Two other market decks run out (signal that markets are exhausted; rarely
  triggers).

After the trigger, play continues until the start player's turn would come
up again, so everyone has the same number of turns. Note: the legacy
"50-budget instawin" and "Government Project" end-game triggers are
**not** part of MVP (DDR-0008).

### Final scoring

1. Each player counts the **end-of-game prestige** value of every card in
   their deck / discard / play area (Prestige Employees, prestige-granting
   items, etc.).
2. Adds their **current prestige score** (immediate prestige + scored
   releases).
3. **Highest score wins.**
4. **Tiebreak**: the player with **more completed Features**.

---

## 8. What we are not doing for MVP (removed concepts)

These appeared in the legacy rulebook or in early design plans but are not
part of MVP:

- **Government Project** (DDR-0008): removed.
- **50-budget instant win** (DDR-0008): removed.
- **Industry / Sector tag system** (DDR-0006): removed.
- **Hobby tag system** (DDR-0007): removed.
- **Medior tier (Production)** (DDR-0005): removed.
- **Effect enum extension** (DDR-0011): no new entries; card text is
  canonical.

These are open for post-MVP reconsideration (see `open-questions.md`).

---

## 9. Workflow for design documentation

If a new design decision arises, or an existing one needs to change:

1. **New DDR** in the `decisions/` folder (using TEMPLATE.md).
2. The relevant section of DESIGN.md is updated to reference the DDR.
3. If a placeholder / numeric value changes, update `open-questions.md`.
4. If card content changes, also update `../plan/inventory.md`.
5. Add an entry to `../../CHANGELOG.md` under `## [Unreleased]`.

Detailed conventions live in the `.cursor/rules/` folder.
