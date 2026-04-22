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

Source: 16 cards. Target: ~6–8 Junior + ~6–8 Senior unique, with 2× copy
duplication → ~32-card hire deck split into two rows. The MEDIOR enum
value is no longer used by any card (DDR-0005); it stays in the model so
old data files don't break.

Resulting tier balance: **8 Junior + 8 Senior** ✓

| Name | Level | Status | Copies | Note |
|------|-------|--------|--------|------|
| John (Mentor) | SENIOR | REWORK | 2 | Card text still says "hire a medior programmer". DDR-0005 fallout — see [open-questions → John (Mentor) ability post-Medior](../design/open-questions.md#john-mentor-ability-post-medior). |
| Li Na (Product Owner) | SENIOR | KEEP | 2 | "Draw until employee" is no-op vs an all-employee starter deck, but becomes meaningful once items mix in. |
| Jake (Job Hopper) | SENIOR | KEEP | 2 | Reclassified MEDIOR → SENIOR. |
| Diego (Some Dude) | JUNIOR | KEEP | 2 | Reclassified MEDIOR → JUNIOR. |
| Kyle (One Angry Programmer) | SENIOR | KEEP | 2 | |
| Randy (Resume-Driven Developer) | JUNIOR | KEEP | 2 | Open-source trigger (DDR-0010); see open-questions for "Open Source Technology assignment" ambiguity. |
| Sophia (Challenge Seeker) | SENIOR | KEEP | 2 | Reclassified MEDIOR → SENIOR. |
| Kwame (Overly Ambitious) | JUNIOR | KEEP | 2 | |
| Mason (Lone Wolf) | SENIOR | KEEP | 2 | |
| Steve (Insecure Developer) | SENIOR | KEEP | 2 | |
| Nina (Inspiring Leader) | SENIOR | KEEP | 2 | |
| Ye (College Dropout) | JUNIOR | KEEP | 2 | |
| Emma (Honors Student) | JUNIOR | KEEP | 2 | |
| Zoe (Quick Learner) | JUNIOR | KEEP | 2 | |
| Luke (Copycat) | JUNIOR | KEEP | 2 | "Copy stats" rule: see [open-questions → Luke (Copycat) — does Copy include items?](../design/open-questions.md#luke-copycat--does-copy-include-items). |
| Tom (Natural architect) | JUNIOR | KEEP | 2 | |

---

## Admin Employees (`src/data/employees.tsx` → `backoffice`)

Source: 9 cards. Every card now has a `level` field (DDR-0005 + Phase 2
audit). The `Person.level` field is **optional** in the model so we can
keep ungraded admin cards in the future.

Tier balance: **3 Junior + 6 Senior**.

| Name | Level | Status | Copies | Note |
|------|-------|--------|--------|------|
| Alice (Onboarding Specialist) | JUNIOR | KEEP | 3 | BUY_TO_DECK + 2 budget. |
| Ahmed (Accounting Assistant) | JUNIOR | KEEP | 3 | +2 budget. |
| Tina (HR trainee) | JUNIOR | KEEP | 3 | Dismiss. |
| Charles (Accountant) | SENIOR | KEEP | 2 | +4 budget. |
| Donna (Insider) | SENIOR | KEEP | 2 | Contract scout/purge. |
| Eve (Downsizing Manager) | SENIOR | KEEP | 2 | Dismiss + 3 budget. |
| Francis (Contracting Coordinator) | SENIOR | REWORK | 2 | "Hire to play, dismiss at end of turn" is mechanically dense; see [open-questions → Francis (Contracting Coordinator) flow](../design/open-questions.md#francis-contracting-coordinator-flow). |
| Grace (Headhunter) | SENIOR | KEEP | 2 | Employee scout/purge. |
| Haruto (CFO) | SENIOR | KEEP | 2 | +5 budget; dismisses backoffice intern. |

Resulting deck sizes: Junior Admin ~9 cards, Senior Admin ~12 cards.

---

## Items (`src/data/items.tsx`)

Source: 13 cards. Default 2 copies each (small deck, 2 market slots).

| Name | Status | Copies | Note |
|------|--------|--------|------|
| Drawing tablet | KEEP | 2 | +2 creativity. |
| Mechanical keyboard | KEEP | 2 | +2 knowledge. |
| Flipchart | KEEP | 2 | +2 organization. |
| Top hat | KEEP | 2 | +1 budget. |
| Programming socks | KEEP | 2 | +budget; bonus on open-source assignment (DDR-0010). |
| Energy drink | KEEP | 2 | Typo "drinnk" fixed. |
| Investment portfolio | KEEP | 2 | Destroy → +3 budget. |
| Piggy bank | KEEP | 2 | Destroy → +3 budget. |
| Beanbag chair | KEEP | 2 | +2 prestige end-of-game. |
| Foosball table | KEEP | 1 | +5 prestige end-of-game. |
| Pristine Programs | KEEP | 1 | Flavor typo "famout" → "famous" fixed. |
| A holy scroll | KEEP | 1 | |
| Design handbook | KEEP | 1 | |

Resulting item deck size: ~22 cards.

---

## Features (`src/data/functional_contracts.tsx`)

Source: 30 cards. Target: ~20–25 unique, 1 copy each. The `sector`
(Industry) field is kept on the data and stays optional on the model
(DDR-0006); inactive for MVP, may revisit post-MVP.

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
| C-018 | Custom font face | ? | 1 | Candidate-cut: overlaps Logo + custom-font Tech. |
| C-019 | Hover texts | ? | 1 | Candidate-cut: storyPoints 2, very narrow scope. |
| C-020 | Logo | KEEP | 1 | |
| C-021 | Legal compliance | KEEP | 1 | Typo "everythinh" → "everything" fixed. |
| C-022 | Accessible design | KEEP | 1 | Typo "Differnces" → "Differences" fixed. |
| C-023 | Customer Support Chatbot | KEEP | 1 | |
| C-024 | Interactive Tutorial | ? | 1 | Candidate-cut: overlaps User manual + Chatbot. |
| C-025 | Social Media Integration | KEEP | 1 | |
| C-026 | Multilingual Support | KEEP | 1 | |
| C-027 | Advanced Search | KEEP | 1 | |
| C-028 | Personalized Recommendations | ? | 1 | Candidate-cut: depends on analytics, niche. |
| C-029 | Gamification | KEEP | 1 | |
| C-030 | Offline Mode | ? | 1 | Candidate-cut: high requirements + niche. |

5 candidate-cuts pre-marked → if all dropped: 25 features. Final cut
decision deferred to a dry-run sort (Phase 3 / pre-playtest).

---

## Technologies (`src/data/tecnical_contracts.tsx`)

Phase 4 audit completed. Target: **20-24 unique active cards, 1 copy
each** (variety over duplication for the playtest). Cuts are commented
out in place — `cardNumber` slots are **not** reused; final
resequencing happens close to release.

Active uniques after Phase 4: **15** (see status `KEEP` rows). The
remaining 5-9 cards needed to hit the target band are designed in
Phase 3.

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
| T-012 | Logging framework | KEEP | 1 | 1 | Empty top is intentional (DDR-0010 clarification). |
| T-013 | Code sharing platform | KEEP | 1 | 3 | Bottom prestige value 2 → 3 to match canonical card text "+⭐⭐⭐" (DDR-0011). |
| T-014 | Debugging tools | KEEP | 1 | 2 | Typo "assginment" fixed. |
| T-015 | Issue tracker | KEEP | 1 | 3 | Typos "assing" and "assginment" fixed. |
| T-016 | Headhunting algorithms | KEEP | 1 | 3 | "Project start" trigger reads as "right after a Project Release". |
| T-017 | Custom font | KEEP | 1 | 1 | Descriptions rewritten to match data: top "+🗒️ towards each assignment", bottom "+💡💡 towards an assignment with 💡 requirement of 6 or higher". |
| T-018 | Spreadsheet macros | KEEP | 1 | 1 | Renumbered from duplicate T-017. |

---

## Starter Deck (`src/data/starter_employees.tsx`)

Phase 3 work. Audit deferred.

| Name | Target level | Status | Copies / player | Note |
|------|--------------|--------|------------------|------|
| CEO ("You") | SENIOR | REWORK | 1 | Ability to be finalized in Phase 3 |
| Dev Intern | JUNIOR | KEEP | 5 (placeholder) | 1/1/1 stat, cost 0 |
| HR Intern | JUNIOR | KEEP | 4 (placeholder) | +1 budget, cost 0 |

---

## Prestige Employee (new)

Phase 3 work.

| Name | Cost | Prestige | Status | Copies | Note |
|------|------|----------|--------|--------|------|
| Prestige Employee (placeholder) | 7 | 5 | NEW | 10 | Single unique, 1 market slot, deck-out = end trigger (DDR-0009) |
