# Card Inventory — MVP

Working tool for the Phase 2 audit. Source: `src/data/*.tsx`. Goal: every
existing card's status + copy count + note in one place.

Update this file whenever a structural change happens to a card (`level`
relabel, rewrite, cut).

---

## Status markers

- `KEEP` — kept without change, or with minimal text cleanup
- `REWORK` — kept, but a meaningful rewrite is required (e.g., rule
  conformance, open-source mechanic, level reassignment)
- `CUT` — removed from MVP (may come back in later iterations)
- `NEW` — does not yet exist, must be created
- `?` — to be decided

Copy counts are **placeholders** (tunable through playtest). The defaults
listed assume a ~60 min, 2–3 player game.

---

## Production Employees (`src/data/employees.tsx` → `employees`)

Source: 16 released + **18** Phase-6 `candidate` placeholders (`Candidate — …` in `employees.tsx`). Target: ~6–8 Junior + ~6–8 Senior unique, with 2× copy
duplication → ~32-card hire deck split into two rows. The MEDIOR enum
value is no longer used by any card (DDR-0005); it stays in the model so
old data files don't break.

Resulting tier balance: **9 Junior + 7 Senior** after Phase 6 cleanup
(Kyle → JUNIOR at cost 4). Prior target was 8+8 — revisit hire-deck
copy math or promote a card if playtest wants strict parity.

| Name | Level | Status | Copies | Note |
|------|-------|--------|--------|------|
| John (Mentor) | SENIOR | KEEP | 2 | MVP text: dismiss Junior, hire Senior from market paying 4 less (see [open-questions → John (Mentor) ability post-Medior](../design/open-questions.md#john-mentor-ability-post-medior)). |
| Li Na (Product Owner) | SENIOR | KEEP | 2 | "Draw until employee" is no-op vs an all-employee starter deck, but becomes meaningful once items mix in. |
| Jake (Job Hopper) | SENIOR | KEEP | 2 | Reclassified MEDIOR → SENIOR. |
| Diego (Some Dude) | JUNIOR | KEEP | 2 | Reclassified MEDIOR → JUNIOR. |
| Kyle (One Angry Programmer) | JUNIOR | KEEP | 2 | Phase 6: SENIOR@4 → JUNIOR@4 (cost-band). Item-destroy drawback unchanged. |
| Randy (Resume-Driven Developer) | JUNIOR | KEEP | 2 | Open-source trigger (DDR-0010); see open-questions for "Open Source Technology assignment" ambiguity. |
| Sophia (Challenge Seeker) | SENIOR | KEEP | 2 | Phase 6: cost 4 → **5** (cost-band). |
| Kwame (Overly Ambitious) | JUNIOR | KEEP | 2 | |
| Mason (Lone Wolf) | SENIOR | KEEP | 2 | |
| Steve (Insecure Developer) | SENIOR | KEEP | 2 | |
| Nina (Inspiring Leader) | SENIOR | KEEP | 2 | |
| Ye (College Dropout) | JUNIOR | KEEP | 2 | |
| Emma (Honors Student) | JUNIOR | KEEP | 2 | |
| Zoe (Quick Learner) | JUNIOR | KEEP | 2 | |
| Luke (Copycat) | JUNIOR | KEEP | 2 | "Copy stats" rule: see [open-questions → Luke (Copycat) — does Copy include items?](../design/open-questions.md#luke-copycat--does-copy-include-items). |
| Tom (Natural architect) | JUNIOR | KEEP | 2 | |

### Design slots — Production (NEW)

Targets defined by the framework in
[`../design/balance.md`](../design/balance.md). Cost-band rule: JUNIOR
cost 2-4, SENIOR cost 5+. See balance §1 for stat budgets and copy
curve. Cost-band cleanup for Kyle / Sophia / John applied in Phase 6;
Luke / Steve / Jake still carry `notes` for open tuning.

| Slot ID | Cost | Tier | Focus | Target stats (cre/kn/org) | Copies | Notes |
|---------|------|------|-------|----------------------------|--------|-------|
| PJ-2-kn  | 2 | JUNIOR | knowledge   | 1/2/1 | 3 | Fills the cost-2 knowledge gap. No ability. |
| PJ-3-kn  | 3 | JUNIOR | knowledge   | 1/4/1 | 3 | No ability. Meat-and-potatoes filler. |
| PJ-3-org | 3 | JUNIOR | organization| 1/1/4 | 3 | No ability. Meat-and-potatoes filler. |
| PJ-4-cre | 4 | JUNIOR | creativity  | 4/1/3 | 2 | Light trigger from existing template. |
| PJ-4-org | 4 | JUNIOR | organization| 1/3/4 | 2 | No ability. |
| PJ-4-bal | 4 | JUNIOR | balanced    | 3/3/2 | 2 | Optional — only if the balanced row needs more body. Small assignment-based bonus. |
| PS-5-cre | 5 | SENIOR | creativity  | 6/2/4 | 2 | Existing-template synergy ability. |
| PS-5-org | 5 | SENIOR | organization| 2/4/6 | 2 | Existing-template synergy ability. |
| PS-5-bal | 5 | SENIOR | balanced    | 4/4/4 | 2 | No drawback. Small ability. |
| PS-6-cre | 6 | SENIOR | creativity  | 6/3/4 | 2 | Defining ability. |
| PS-6-kn  | 6 | SENIOR | knowledge   | 3/6/4 | 2 | Defining ability. |
| PS-6-bal | 6 | SENIOR | balanced    | 5/5/4 | 2 | Defining ability. |
| PS-7-a   | 7 | SENIOR | (cre anchor) | ~5/5/5 shifted to creativity | 1 | Strategy-defining anchor; single copy. |
| PS-7-b   | 7 | SENIOR | (kn anchor)  | ~5/5/5 shifted to knowledge  | 1 | Strategy-defining anchor; single copy. |
| PS-7-c   | 7 | SENIOR | (org anchor) | ~5/5/5 shifted to organization| 1 | Strategy-defining anchor; single copy. |
| PS-8-a   | 8 | SENIOR | capstone    | ~6/6/6 baseline | 1 | Distinct end-game payoff #1. Single copy. |
| PS-8-b   | 8 | SENIOR | capstone    | ~6/6/6 baseline | 1 | Distinct end-game payoff #2. Single copy. |
| PS-8-c   | 8 | SENIOR | capstone    | ~6/6/6 baseline | 1 | Distinct end-game payoff #3. Single copy. |

Implementation fallback (per balance §1.5): if a designed slot has no
card concept by execution time, print extra copies of an adjacent
unique. Don't trim plan numbers.

**Phase 6 (2026-04):** every row in the Production design-slot table
above is covered by a matching **candidate** card in
`src/data/employees.tsx` (`candidate: true`, `notes` cites the slot
ID). Replace names / art / rules before treating as final.

---

## Admin Employees (`src/data/employees.tsx` → `backoffice`)

Source: 9 released + **14** Phase-6 `candidate` placeholders. Every card now has a `level` field (DDR-0005 + Phase 2
audit). The `Person.level` field is **optional** in the model so we can
keep ungraded admin cards in the future.

Tier balance: **4 Junior + 5 Senior** (Phase 6: Donna → JUNIOR; Eve /
Grace / Francis cost → 5).

| Name | Level | Status | Copies | Note |
|------|-------|--------|--------|------|
| Alice (Onboarding Specialist) | JUNIOR | KEEP | 3 | BUY_TO_DECK + 2 budget. |
| Ahmed (Accounting Assistant) | JUNIOR | KEEP | 3 | +2 budget. |
| Tina (HR trainee) | JUNIOR | KEEP | 3 | Dismiss. |
| Charles (Accountant) | SENIOR | KEEP | 2 | +4 budget. |
| Donna (Insider) | JUNIOR | KEEP | 2 | Phase 6: SENIOR@3 → JUNIOR@3 (cost-band). Contract scout/purge. |
| Eve (Downsizing Manager) | SENIOR | KEEP | 2 | Phase 6: cost 4 → **5**. Dismiss + 3 budget. |
| Francis (Contracting Coordinator) | SENIOR | REWORK | 2 | Phase 6: cost 4 → **5**. Flow still underspecified — [Francis flow OQ](../design/open-questions.md#francis-contracting-coordinator-flow). |
| Grace (Headhunter) | SENIOR | KEEP | 2 | Phase 6: cost 4 → **5**. Employee scout/purge. |
| Haruto (CFO) | SENIOR | KEEP | 2 | +5 budget; dismisses backoffice intern. |

Resulting deck sizes: Junior Admin ~11 cards, Senior Admin ~10 cards
(approx.; see per-card `printCount` / deck construction).

### Design slots — Backoffice (NEW)

Targets defined by the framework in
[`../design/balance.md`](../design/balance.md) §2. Same cost-band rule
(JUNIOR 2-4, SENIOR 5+). Phase 6 applied Donna / Eve / Francis / Grace
cost-band fixes; Francis flow OQ remains.

| Slot ID | Cost | Tier | Role | Copies | Notes |
|---------|------|------|------|--------|-------|
| BJ-2-budget+kicker | 2 | JUNIOR | budget + tiny kicker | 3 | Sister card to Alice / Ahmed; explicit near-variant slot. ~+2 BUDGET + small effect. |
| BJ-3-draw  | 3 | JUNIOR | card draw          | 2 | Small draw effect (e.g. "draw 1, then discard 1") at 0 BUDGET. |
| BJ-3-items | 3 | JUNIOR | item-market scout  | 2 | Look-at / refill access to the item deck. |
| BJ-4-cull  | 4 | JUNIOR | dismiss + budget   | 2 | Sister to Tina, rebalanced upward (+1 BUDGET on top of dismiss). |
| BS-5-draw  | 5 | SENIOR | card draw          | 2 | "Draw 2 cards" + 0-1 BUDGET. |
| BS-5-recur | 5 | SENIOR | discard recursion  | 2 | "Return a non-prestige card from your discard to your hand." |
| BS-6-discount | 6 | SENIOR | hire discount    | 2 | "This turn, employee hires cost 1 less" + 1-2 BUDGET. |
| BS-6-items    | 6 | SENIOR | item-market mgmt | 2 | Scout / purge analogue of Donna / Grace, targeting items. |
| BS-7-a | 7 | SENIOR | indirect accelerator    | 1 | Once-per-turn lower an assignment's stat requirement. Single copy. |
| BS-7-b | 7 | SENIOR | mega-CFO (budget)        | 1 | Big-budget anchor, sister to Haruto. Single copy. |
| BS-7-c | 7 | SENIOR | heavy market controller  | 1 | Multi-row scout / refill control. Single copy. |
| BS-8-a | 8 | SENIOR | mega-utility combo       | 1 | Draw + dismiss + budget. Single copy. |
| BS-8-b | 8 | SENIOR | strategic enabler        | 1 | Distinct lategame engine. Single copy. |
| BS-8-c | 8 | SENIOR | strategic enabler        | 1 | Distinct lategame engine. Single copy. |

Implementation fallback (per balance §1.5) applies — under-designed
slots get extra copies of an adjacent unique.

**Phase 6 (2026-04):** every row in the Backoffice design-slot table is
covered by a **candidate** card in `src/data/employees.tsx` →
`backoffice` (`candidate: true`).

Coverage decisions deferred to playtest:
- Whether deck culling stays split between admin (dismiss) and dev
  (Diego, Jake) or consolidates.
- Whether item-market access lives on backoffice or on items themselves.

---

## Items (`src/data/items.tsx`)

Source: 13 released + **6** Phase-6 `candidate` placeholders. Default 2 copies each (small deck, 2 market slots).

| Name | Status | Copies | Note |
|------|--------|--------|------|
| Drawing tablet | KEEP | 2 | +2 creativity. |
| Mechanical keyboard | KEEP | 2 | +2 knowledge. |
| Flipchart | KEEP | 2 | +2 organization. |
| Top hat | KEEP | 2 | +1 budget. |
| Programming socks | KEEP | 2 | Phase 6: cost-1 premium trim — +💡💡 on Open Source Tech assignment only (no +💲). |
| Energy drink | KEEP | 2 | Phase 6: cost-1 premium trim — deck-top return only (no +💲). Text cleanup ("equipped to"). |
| Investment portfolio | KEEP | 2 | Phase 6: removed passive +💲; destroy still → +💲💲💲. |
| Piggy bank | KEEP | 2 | Destroy → +2 budget. |
| Beanbag chair | KEEP | 2 | +2 prestige end-of-game. |
| Foosball table | KEEP | 1 | +5 prestige end-of-game. |
| Pristine Programs | KEEP | 1 | Phase 6: stat line tightened (0/2/1) vs cost-4 premium in `balance.md` §3. |
| A holy scroll | KEEP | 1 | Phase 6: org stat 4→3 vs same premium. |
| Design handbook | KEEP | 1 | Phase 6: cre stat 3→2 vs same premium. |
| Candidate — Studio monitor (stat) | NEW | 1 | Phase 6 slot I-2-cre; `candidate: true`. |
| Candidate — Reference book (stat) | NEW | 1 | Phase 6 slot I-2-kn; `candidate: true`. |
| Candidate — Label maker (stat) | NEW | 1 | Phase 6 slot I-2-org; `candidate: true`. |
| Candidate — Sticky workflow | NEW | 1 | Phase 6 slot I-3-wild-a; `candidate: true`. |
| Candidate — Pocket notebook | NEW | 1 | Phase 6 slot I-3-wild-b; `candidate: true`. |
| Candidate — Petty cash box | NEW | 2 | Phase 6 slot I-3-budget (`printCount` 2); `candidate: true`. |
| Candidate — Trophy case | NEW | 1 | Phase 6 slot I-5-prestige; `candidate: true`. |

Resulting item deck size: ~22 + 8 candidate copies (see `printCount` on
Petty cash box) ≈ **30** item cards in source until candidates are cut
or merged.

### Design slots — Items (NEW)

Targets defined by the framework in
[`../design/balance.md`](../design/balance.md) §3. Items are
**equippable-only for MVP**; the equippable-vs-general split is logged
as an open question (see
[`../design/open-questions.md`](../design/open-questions.md) → "Items
split").

| Slot ID | Cost | Role | Copies | Notes |
|---------|------|------|--------|-------|
| I-2-cre | 2 | +creativity stat | 1 | Cost-2 stat item; +3 creativity, no other text. |
| I-2-kn  | 2 | +knowledge stat  | 1 | Cost-2 stat item; +3 knowledge, no other text. |
| I-2-org | 2 | +organization stat | 1 | Cost-2 stat item; +3 organization, no other text. |
| I-3-wild-a    | 3 | wildcard utility    | 1-2 | Fills the empty cost-3 band. Non-stat utility (e.g. once-per-turn extra hire-market scout). |
| I-3-wild-b    | 3 | wildcard utility    | 1-2 | Second wildcard idea (e.g. draw-1 trigger). |
| I-3-budget    | 3 | destroy-for-budget  | 2 | Sits between Piggy bank (2) and Investment portfolio (4). |
| I-5-prestige  | 5 | end-of-game prestige | 1 | Cap of the prestige-item ladder; +6-7 EOG prestige. |

**Phase 6 (2026-04):** each Items design-slot row has a **candidate**
in `src/data/items.tsx` (`candidate: true`). Wildcard slots use
contract-scout / draw / destroy-for-budget placeholders; tune text vs
`balance.md` §3.

---

## Features (`src/data/functional_contracts.tsx`)

Source: 30 released + **5** Phase-6 `candidate` placeholders (C-031–C-035). Target: **keep all 30 active for the first
playtest** — better to test more cards than to cut some
preemptively. Deck-size scaling for higher player counts is
intended to be handled by **player-count tags** on contracts (see
[`../design/open-questions.md`](../design/open-questions.md) →
"Player-count contract tags") rather than by cutting cards from
the design pool.

The `sector` (Industry) field is kept on the data and stays
optional on the model (DDR-0006); inactive for MVP, may revisit
post-MVP.

| ID | Name | Status | Copies | Note |
|----|------|--------|--------|------|
| C-001 | Landing page | KEEP | 1 | |
| C-002 | User Authentication | KEEP | 1 | |
| C-003 | Database Setup | KEEP | 1 | |
| C-004 | API Integration | KEEP | 1 | |
| C-005 | Responsive Design | KEEP | 1 | |
| C-006 | Security Audit | KEEP | 1 | |
| C-007 | Deployment Automation | KEEP | 1 | |
| C-008 | Performance Optimization | KEEP | 1 | |
| C-009 | User Analytics | KEEP | 1 | |
| C-010 | Product research | KEEP | 1 | |
| C-011 | Payment processing | KEEP | 1 | |
| C-012 | Product description copywriting | KEEP | 1 | |
| C-013 | Permission handling | KEEP | 1 | |
| C-014 | Business workflows | KEEP | 1 | |
| C-015 | Push notifications | KEEP | 1 | |
| C-016 | Reporting | KEEP | 1 | |
| C-017 | User manual | KEEP | 1 | |
| C-018 | Custom font face | KEEP | 1 | Previously flagged as candidate-cut (overlaps Logo + custom-font Tech). Kept for first playtest; candidate for a `4P` tag if the deck needs trimming at low player counts. |
| C-019 | Hover texts | KEEP | 1 | Previously flagged candidate-cut (very narrow scope, SP 2). Kept; story-point pacing OK for T1 band. |
| C-020 | Logo | KEEP | 1 | |
| C-021 | Legal compliance | KEEP | 1 | Typo fixed. Phase 6: 🗒️ requirement 8→7 (T3 single-stat max); SP unchanged. |
| C-022 | Accessible design | KEEP | 1 | Typo "Differnces" → "Differences" fixed. |
| C-023 | Customer Support Chatbot | KEEP | 1 | |
| C-024 | Interactive Tutorial | KEEP | 1 | Previously flagged candidate-cut (overlaps User manual + Chatbot). Kept; candidate for a `3-4P` tag. |
| C-025 | Social Media Integration | KEEP | 1 | |
| C-026 | Multilingual Support | KEEP | 1 | |
| C-027 | Advanced Search | KEEP | 1 | |
| C-028 | Personalized Recommendations | KEEP | 1 | Previously flagged candidate-cut (niche, depends on analytics). Kept; candidate for a `3-4P` tag. |
| C-029 | Gamification | KEEP | 1 | |
| C-030 | Offline Mode | KEEP | 1 | Previously flagged candidate-cut (high requirements + niche). Kept as a T4-band stress-test card; candidate for a `4P` tag. |
| C-031 | Candidate — Org checklist (T1) | NEW | 1 | Phase 6 design slot F-T1-org; `candidate: true`. |
| C-032 | Candidate — Knowledge primer (T1) | NEW | 1 | Phase 6 design slot F-T1-kn; `candidate: true`. |
| C-033 | Candidate — Creative spike (T1) | NEW | 1 | Phase 6 design slot F-T1-cre; `candidate: true`. |
| C-034 | Candidate — Immersive experience (T4) | NEW | 1 | Phase 6 design slot F-T4-cre; `candidate: true`. |
| C-035 | Candidate — Platform overhaul (T4) | NEW | 1 | Phase 6 design slot F-T4-bal; `candidate: true`. |

Active feature pool: **35** entries in source (**30** released + **5**
candidates; was targeting cuts down to 25;
revised — see notes above). Distribution across difficulty bands is
audited in `balance.md` §4.

**Phase 6 (feature balance):** `storyPoints` on C-002, C-007, C-011,
C-012, C-017, C-025 retuned to match skill-total tier vs `balance.md`
§4.2–§4.3; pacing `notes` removed from released rows in source.

### Design slots — Features (NEW)

Targets defined by the framework in
[`../design/balance.md`](../design/balance.md) §4. Bands: T1 4-6 / T2
7-9 / T3 10-12 / T4 13-15 (skill total). Story-point pacing: T1 2-3,
T2 3-4, T3 4-6, T4 6-8.

Current pool is light at the **T1 floor** and the **T4 ceiling**;
mid-band (T2/T3) is already saturated.

| Slot ID | Tier | Skill total | Single-stat max | Focus | Story points | Notes |
|---------|------|-------------|------------------|-------|---------------|-------|
| F-T1-org | 1 | 5 | 3 | organization | 2-3 | Easy organization-focus. Completable by interns + 1-2 juniors. |
| F-T1-kn  | 1 | 5 | 3 | knowledge    | 2-3 | Easy knowledge-focus. Same pacing. |
| F-T1-cre | 1 | 6 | 4 | creativity   | 3   | Easy creativity-focus. |
| F-T4-cre | 4 | 13-14 | 7-8 | creativity | 6-7 | Hard creativity-focus. Senior + supporters. |
| F-T4-bal | 4 | 14    | 6   | balanced   | 7   | Hard balanced. Two mid seniors or 1 high senior + helpers. |

No candidate-cuts in this slot list — all 30 existing features
stay active for the first playtest. Deck-size scaling is handled
by the player-count tag system (see open question), not by
cutting cards from the design pool.

**Phase 6 (2026-04):** design-slot rows F-T1-* / F-T4-* are filled by
**candidate** features C-031–C-035 in `functional_contracts.tsx`
(`candidate: true`).

---

## Technologies (`src/data/tecnical_contracts.tsx`)

Phase 4 audit completed; Phase 3 added 6 new cards (T-019 to T-024) to
land in the target band. Target: **20-24 unique active cards, 1 copy
each** (variety over duplication for the playtest). Cuts are commented
out in place — `cardNumber` slots are **not** reused; final
resequencing happens close to release.

Active uniques: **21** released + **3** Phase-6 candidates (T-025–T-027)
= **24** entries in source (see status `KEEP` / candidate rows).

DDR-0010 audit rule: top half must be standalone and self-consistent.
**Empty ("do-nothing") top halves are explicitly allowed** (see DDR-0010
clarification dated 2026-04-22). `openSourcePrestige` is now a
**required** field on every Technology — values seeded roughly
proportional to skill totals (see open-questions for the mapping).

| ID | Name | Status | Copies | OS⭐ | Note |
|----|------|--------|--------|------|------|
| T-001 | Microtransactions | KEEP | 1 | 3 | Empty top is intentional under DDR-0010 clarification: once covered, the tech contributes nothing. |
| T-002 | Version control system | KEEP | 1 | 5 | Top: first time you assign 3+ employees → +⚙️⚙️. Always-armed trigger. |
| T-003 | Agile Methodology | KEEP | 1 | 5 | |
| T-004 | Automated Testing | CUT | 0 | — | Both halves used undefined triggers (TEST_RUN, BUG_FIX). Commented out in source. |
| T-005 | Continuous Integration | KEEP | 1 | 5 | |
| T-006 | Cloud Infrastructure | KEEP | 1 | 4 | -2 BUDGET completion penalty dropped (was bug, no other tech has one). |
| T-007 | Machine Learning Algorithms | CUT | 0 | — | Top wasn't persistent; bottom needs a generic-token system that doesn't exist for MVP. Commented out. See [IDEAS.md → Generic interaction tokens](../../IDEAS.md). |
| T-008 | User Experience Optimization | KEEP | 1 | 5 | |
| T-009 | Low Code Solution | KEEP | 1 | 3 | "Set ⚙️ requirement to 0" — `multiUse: false` semantics intentionally once-per-published-instance for MVP. |
| T-010 | Design system | KEEP | 1 | 3 | Renamed from "Design handbook" to avoid name collision with the item. |
| T-011 | Reusable UI components | KEEP | 1 | 3 | Empty top is intentional (DDR-0010 clarification). |
| T-012 | Logging framework | KEEP | 1 | 2 | Phase 6: required skills raised to T1 floor (total 10); `openSourcePrestige` 1→2. Empty top intentional (DDR-0010). |
| T-013 | Code sharing platform | KEEP | 1 | 3 | Bottom prestige value 2 → 3 to match canonical card text "+⭐⭐⭐" (DDR-0011). |
| T-014 | Debugging tools | KEEP | 1 | 2 | Typo "assginment" fixed. |
| T-015 | Issue tracker | KEEP | 1 | 3 | Typos "assing" and "assginment" fixed. |
| T-016 | Headhunting algorithms | KEEP | 1 | 3 | "Project start" trigger reads as "right after a Project Release". |
| T-017 | Custom font | KEEP | 1 | 2 | Phase 6: required skills raised to T1 floor (total 10); `openSourcePrestige` 1→2. |
| T-018 | Spreadsheet macros | KEEP | 1 | 2 | Phase 6: required skills raised to T1 floor (total 10); `openSourcePrestige` 1→2. Renumbered from duplicate T-017. |
| T-019 | Mobile App | NEW | 1 | 3 | Phase 3. completionEffects: ➕💲💲💲. Top: ➕💲 on FeatureCompletion. Bottom: ➕🗒️ on FeatureAssignment. Skill total 13. |
| T-020 | Search / SEO Indexing | NEW | 1 | 3 | Phase 3. Top: scout 3 contracts on FeatureCompletion. Bottom: ➕💡 on FeatureAssignment. Skill total 13. |
| T-021 | Recruiting Automation | NEW | 1 | 3 | Phase 3 (user-designed). Renamed from "Headhunting Database" to avoid name collision with T-016 Headhunting algorithms. Top: first hire each turn refunds ➕💲 (Hire trigger, BUDGET +1, multiUse:false). Bottom: on employee market refill, look at top 2, put 1 on bottom. Skill total 11. Bottom-effect uses "NONE" trigger placeholder (no native enum for "on market refill"); canonical text is the rule (DDR-0011). |
| T-022 | A/B Testing Framework | NEW | 1 | 3 | Phase 3. Top: ➕⭐ on FeatureCompletion. Bottom: ➕💡 on FeatureAssignment. Pairs with T-008 (UX). |
| T-023 | Tech Blog | NEW | 1 | 3 | Phase 3. Top: ➕⭐ on TechCompletion (any). Bottom: ➕💡 on TechAssignment (any). |
| T-024 | Open Source License | NEW | 1 | 2 | Phase 3. Top: ➕⭐⭐ on Open Source TechCompletion. Bottom: ➕⚙️➕💡 on TechAssignment (any). Synergy with T-013 / T-023. |
| T-025 | Candidate — Workflow engine (T1 org) | NEW | 1 | 2 | Phase 6 slot TC-T1-org; `candidate: true`. |
| T-026 | Candidate — Creative toolchain (T2 cre) | NEW | 1 | 3 | Phase 6 slot TC-T2-cre; `candidate: true`. |
| T-027 | Candidate — Company operating system (T4 cap) | NEW | 1 | 5 | Phase 6 slot TC-T4-cap; `candidate: true`. |

### Design slots — Technologies (NEW)

Targets defined by the framework in
[`../design/balance.md`](../design/balance.md) §5. Bands: T1 9-11 /
T2 12-14 / T3 15-17 / T4 18+ (skill total). Active tech total is
already in the 20-24 target band, so slot count is conservative.

| Slot ID | Tier | Skill total | Focus | Notes |
|---------|------|-------------|-------|-------|
| TC-T1-org | T1 | 10 | organization | Balances current cre/kn-heavy tech distribution. |
| TC-T2-cre | T2 | 13 | creativity   | Fills the creative-tech gap. |
| TC-T4-cap | T4 | 18+ | balanced or focus | Capstone "always-on" defining engine card; 1 copy. |

**Phase 6 (2026-04):** T-025 / T-026 / T-027 are **candidate** drafts for
the three rows above (`candidate: true` in `tecnical_contracts.tsx`).

**Resolved (Phase 6):** T-012 / T-017 / T-018 requirements raised to the
T1 skill-total band (~10); see `balance.md` §5.2.

---

## Starter Deck (`src/data/starter_employees.tsx`)

Phase 3 closed.

Per-player starter (DDR-0012 placeholder ratio): **1 CEO + 3 Dev Intern +
6 HR Intern = 10 cards** (`STARTER_*_INTERNS_PER_PLAYER` in
`src/lib/constants.ts`).

| Name | Target level | Status | Copies / player | Note |
|------|--------------|--------|------------------|------|
| CEO ("You") | SENIOR | KEEP | 1 | Ability finalized: +2 BUDGET, scout 3 contracts, purge up to 1 from contract row. Stats 2/2/2. See [open-questions → CEO ability for MVP](../design/open-questions.md#ceo-ability-for-mvp). |
| Dev Intern | JUNIOR | KEEP | 5 | Stats 1/1/1, cost 0, no text. |
| HR Intern | JUNIOR | KEEP | 4 | Stats 0/0/0, cost 0. Effect: +1 BUDGET (matches canonical text). |

---

## Prestige Employee (`src/data/prestige_employees.tsx`)

Phase 3 closed.

| Name | Cost | Prestige | Status | Copies | Note |
|------|------|----------|--------|--------|------|
| Someone's Nephew | 7 | 5 | KEEP | 10 (`printCount` in source) | Single unique, 1 permanent market slot, deck-out = end trigger (DDR-0009). Abilities text states end-game prestige; empty `effects` / `triggeredAbilities` — pure Province-style money dump, themed as a nepotism hire. |

---

## Reference components

Hand-drawn or printed table aids — not cards, not in `src/data/*`.

| Name | Status | Note |
|------|--------|------|
| Project Track reference | DEFINED | 1 shared copy. Layout in DESIGN.md §4 → "Reference card layout". Values from open-questions placeholder scale. |
