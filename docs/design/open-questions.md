# Open Questions

Design questions that need an answer before, or during, playtesting. Update
when a new question arises, and remove (or promote into a DDR) when a
question is resolved.

Convention: every question cites the originating DDR (when applicable) and a
default placeholder value to work with through the MVP playtest.

---

## Numeric placeholders (Project Track, thresholds)

### Project Track scale
- **Source**: DDR-0004
- **Default placeholder**: `Progress: 1 2 3 4 5 6 7 8 9 10 11 12+ → Prestige: 0 0 1 1 2 2 3 4 5 6 7 8`
- **What we test**: whether the deep-deck strategy actually becomes a
  viable alternative, or thin-deck still dominates.

### Project Track maximum length
- **Source**: DDR-0008 (without Government Project, what happens at the max?)
- **Default**: 12 spaces; if a player reaches it, the marker stays there
  and the player gets max prestige at release.

### Prestige Employee cost / value
- **Source**: DDR-0009
- **Default placeholder**: cost 7, +5 prestige end-of-game, 10 copies.
- **What we test**: is it attractive enough to make budget strategies a
  legitimate goal, and does end-game trigger fire too early / late.

### End-game prestige threshold
- **Source**: DDR-0008 / DDR-0009 (general end condition)
- **Default placeholder**: 30 (2 players), 25 (3 players), 20 (4 players).
- **What we test**: pacing.

---

## Market slot counts

### Hire market slots per row
- **Source**: DDR-0003
- **Default placeholder**:
  - Junior Production: 4 slots
  - Senior Production: 3 slots
  - Junior Admin: 4 slots
  - Senior Admin: 3 slots
  - Prestige Employee: 1 slot
- **What we test**: whether there is enough simultaneous choice in the
  Senior rows, and whether the market slows the table.

### Item market
- **Source**: DDR-0003
- **Default placeholder**: 2 slots.
- **What we test**: are 2 enough? Maybe 3 makes for more interesting choices.

### Items split — equippable vs general
- **Source**: balance pass (Phase 6), see
  [`balance.md`](balance.md) §3.
- **Question**: should the item type be split into **equippable items**
  (current behaviour: attached to an employee, leaves with them) and a
  new **general items** category (e.g. play-card → do-thing one-shots,
  not bound to an employee)? The split would unlock wildcard effects
  that don't fit the equip model (one-shot deck manipulation, market
  scout, conditional budget bursts, etc.).
- **MVP default**: **stay equippable-only**. Revisit post-playtest #1.
  If the split is taken in, it requires a new DDR (structural change
  to the item type) and re-flowing the item design slots in
  `../plan/inventory.md`.
- **What we test**: whether the item pool feels too constrained — i.e.,
  whether wildcard effects we want to add keep getting awkward as
  equip-only items.

### Assignment market
- **Source**: DDR-0003
- **Default placeholder**: 3 Feature slots + 3 Technology slots.
- **What we test**: how the competition for assignments feels.

### Player-count contract tags
- **Source**: balance pass (Phase 6), see
  [`balance.md`](balance.md) §4.
- **Question**: rather than cutting unique contracts to control deck
  size, should contracts carry a **player-count tag** (e.g. `2P+`
  default / `3P+` / `4P only`) so the active deck scales with the
  table size at setup? Setup would filter the deck to "tag ≤ player
  count" before shuffling.
- **Working proposal**: a `playerCount?: 2 | 3 | 4` minimum field on
  `Contract`. Untagged = always in. Initial tagging candidates from
  the Phase 2 audit (no longer being cut): C-018, C-024, C-028, C-030
  for 3P+ or 4P-only. Same idea applies to Technologies.
- **MVP default**: **untagged** — every contract is in the deck for
  the first playtest. Revisit if the deck feels oversized at 2 players
  (too many low-impact features in rotation, or contract row stagnates).
- **What we test**: deck pacing at 2 vs. 3 vs. 4 players; whether the
  deck-out → assignment-deck-empty end trigger fires too early at low
  player counts.
- **Structural impact**: if adopted, this is a new field on the
  `Contract` interface in `src/model/contracts/Contract.ts` and a new
  DDR (similar in scope to DDR-0006 Industry).

---

## Starter deck

### Dev Intern / HR Intern ratio
- **Source**: DDR-0012
- **Default placeholder**: **3 Dev + 6 HR** per player (see
  `STARTER_*_INTERNS_PER_PLAYER` in `src/lib/constants.ts`). Updated from
  5 + 4 to bias early +1 BUDGET and hire-market access.
- **What we test**: early hire flow vs. starting workforce depth; further
  ratio tweaks after playtest.

### CEO ability for MVP
- **Source**: DDR-0012
- **Status**: **resolved 2026-04-22 (Phase 3)**. The current card text is
  taken as the MVP starting agency: **"+2 BUDGET; look at the top 3 cards
  of the contract deck, reorder them on top/bottom freely; purge up to 1
  card from the contract row."** Stat baseline kept at 2 / 2 / 2,
  level SENIOR, cost 0, prestige 0.
- **What we test**: is the contract-row manipulation too strong against
  opponents who don't have it (it's only on the CEO, every player has
  one), and does the +2 BUDGET starting boost trivialize the early game?
  Easy fallback if too strong: drop the rearrange to top-2, or drop the
  purge.

---

## Open Source mechanic details

### Open-source publish prestige value
- **Source**: DDR-0010
- **Status**: field is now **required** on the `Technology` interface
  (resolved 2026-04-22). Per-card values are seeded roughly proportional
  to required-skill total, with a small premium for the hardest-to-
  develop cards. Initial mapping (Phase 4):
  - Skill total 4-5 → `openSourcePrestige: 1`
    (T-012 Logging framework, T-017 Custom font, T-018 Spreadsheet macros)
  - Skill total 8 → `openSourcePrestige: 2`
    (T-014 Debugging tools)
  - Skill total 11-12 → `openSourcePrestige: 3`
    (T-001, T-009, T-010, T-011, T-013, T-015, T-016)
  - Skill total 15 → `openSourcePrestige: 4`
    (T-006 Cloud Infrastructure)
  - Skill total 16-17 → `openSourcePrestige: 5` (premium)
    (T-002, T-003, T-005, T-008)
- **What we test**: is publishing attractive enough vs. private? Are the
  premiums on the hardest techs enough to justify chasing them?

### Reversibility of the private/public choice
- **Source**: DDR-0010
- **Default**: not reversible.

### Can an open source assignment exist?
- **Source**: DDR-0010
- **Question**: currently the open-source decision happens only at
  completion (private vs. public). Several card effects refer to "Open
  Source Technology assignment" (e.g., Randy, Programming socks). If
  open-source-ness only manifests after completion, what do these
  references mean?
- **MVP default**: such texts get rephrased — e.g., "when assigned to a
  Technology assignment", or the open-source-specific syntax is removed.
  See `docs/plan/inventory.md` during the audit.

---

## Assignment-resolution details

### Multi-employee completion "ownership"
- **Source**: DDR-0003
- **Question**: if player A left 1 employee on an assignment, and player B
  later completes it with 2 of their own, who owns the completion bonus?
- **Default placeholder**: whoever brings the completing assignment over the
  line (B). The earlier-placed employee goes back to its owner's discard,
  normally. (Test this — denial space could become very strong.)

### Multiple players involved — who releases the Tech?
- **Source**: DDR-0010
- **Default**: whoever completes (see above).

### Is an assigned employee committed or free?
- **Source**: not documented
- **Question**: once placed on an assignment, can it be pulled back during
  the same turn, or is it committed?
- **Default placeholder**: committed; cannot be pulled back; only completion
  or end-of-turn can return it.

---

## Tier reconstruction post-MVP

### Bring back the Medior tier?
- **Source**: DDR-0005
- **What we test**: is the gap noticeable ("no stable midgame workforce")?
  If so, reintroduce post-MVP either as an extra deck or as a "medior"
  marker mixed into the Junior/Senior pools.

### Bring back the Sector system?
- **Source**: DDR-0006
- **What we test**: do we miss the thematic "specialization" play?

### Bring back the Hobby system?
- **Source**: DDR-0007
- **What we test**: do we miss employee-employee synergies?

### Multiple Prestige Employee variants?
- **Source**: DDR-0009
- **What we test**: is the single prestige card boring?

---

## Card-specific rule clarifications (surfaced in Phase 2 audit)

### John (Mentor) ability post-Medior
- **Source**: DDR-0005 (Medior tier removed for MVP)
- **Question**: John's text "Dismiss a junior programmer. Hire a medior
  programmer without paying its cost." references the removed Medior
  tier. What replaces the training shortcut?
- **Default placeholder for MVP**: *not yet rewritten.* Working proposal
  to lock in during Phase 3: "Dismiss a Junior programmer in your hand or
  discard pile. Hire a Senior programmer paying 4 less than its cost."
  The 4-budget discount is itself a placeholder.
- **What we test**: whether the discounted Senior path is too strong (skip
  the entire Junior accumulation phase) or too weak.

### Luke (Copycat) — does Copy include items?
- **Source**: undocumented in card text
- **Question**: When Luke "copies the stats of one of your other
  employees assigned to the same project", does the copy include
  equipped-item bonuses, or just the base employee stats?
- **Default placeholder for MVP**: copy **base employee stats only**
  (items do not propagate). Simpler to adjudicate at the table.

### Francis (Contracting Coordinator) flow
- **Source**: undocumented detail
- **Question**: The text says "Put an employee directly into play while
  paying 2 less than its cost. At the end, dismiss them." Several details
  are unclear: "play" means the play area or assignment? When can the
  employee be played from (hand only, or also discard / market)? "At the
  end" = end of turn or end of phase?
- **Default placeholder for MVP**: hire from the **market only**, paying
  cost − 2; the new employee enters the **play area** as if just played
  (on-play effects fire); dismissed in cleanup of the same turn.
- **What we test**: is this too swingy? Should Francis only be able to
  fetch Junior-tier hires?

### Open Source Technology assignment references
- **Source**: DDR-0010, see existing entry above
- **Cards affected**: Randy (Resume-Driven Developer), Programming socks,
  T-013 (Code sharing platform), T-017 (Custom font, in T-013 wording).
- **Default placeholder for MVP**: rephrase trigger as "when assigned to
  a Technology assignment, **as long as you intend to publish it open
  source on completion**" — ad-hoc honor system, since the
  private/public choice only crystallizes at completion. Worth
  formalizing post-MVP (e.g., declare publication intent at assignment
  time, no take-backs).
