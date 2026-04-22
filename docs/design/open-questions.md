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

### Assignment market
- **Source**: DDR-0003
- **Default placeholder**: 3 Feature slots + 3 Technology slots.
- **What we test**: how the competition for assignments feels.

---

## Starter deck

### Dev Intern / HR Intern ratio
- **Source**: DDR-0012
- **Default placeholder**: 5 Dev + 4 HR.
- **What we test**: balance between starting budget and starting workforce.

### CEO ability for MVP
- **Source**: DDR-0012
- **Default placeholder**: "+2 budget, +1/1/1 stat, look at the top 2 cards
  of any assignment deck and rearrange". Tunable.
- **What we test**: too much complexity, or just the right starting agency.

---

## Open Source mechanic details

### Open-source publish prestige value
- **Source**: DDR-0010
- **Default placeholder**: card-specific `openSourcePrestige` field on the
  Technology; default 2.
- **What we test**: is publishing attractive enough vs. private?

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
