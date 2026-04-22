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

---

## Production Employees (`src/data/employees.tsx` → `employees`)

Source: 16 cards. Target: ~6-8 Junior + ~6-8 Senior unique, with 2-3×
duplication → a ~30-40 card hire deck.

| Name | Current level | Target level | Status | Copies | Note |
|------|---------------|--------------|--------|--------|------|
| John (Mentor) | SENIOR | SENIOR | ? | ? | TRAINING effect rule to clarify |
| Li Na (Product Owner) | SENIOR | SENIOR | ? | ? | DRAW_UNTIL_PERSON to clarify |
| Jake (Job Hopper) | MEDIOR | SENIOR | REWORK | ? | Medior → Senior reclass |
| Diego (Some Dude) | MEDIOR | JUNIOR | REWORK | ? | Medior → Junior reclass |
| Kyle (One Angry Programmer) | SENIOR | SENIOR | ? | ? | |
| Randy (Resume-Driven Dev) | JUNIOR | JUNIOR | ? | ? | Open Source trigger stays |
| Sophia (Challenge Seeker) | MEDIOR | SENIOR | REWORK | ? | |
| Kwame (Overly Ambitious) | JUNIOR | JUNIOR | ? | ? | |
| Mason (Lone Wolf) | SENIOR | SENIOR | ? | ? | |
| Steve (Insecure Developer) | SENIOR | SENIOR | ? | ? | |
| Nina (Inspiring Leader) | SENIOR | SENIOR | ? | ? | |
| Ye (College Dropout) | JUNIOR | JUNIOR | ? | ? | |
| Emma (Honors Student) | JUNIOR | JUNIOR | ? | ? | |
| Zoe (Quick Learner) | JUNIOR | JUNIOR | ? | ? | |
| Luke (Copycat) | JUNIOR | JUNIOR | ? | ? | "Copy stats" rule to clarify |
| Tom (Natural architect) | JUNIOR | JUNIOR | ? | ? | |

---

## Admin Employees (`src/data/employees.tsx` → `backoffice`)

Source: 9 cards. Target: every card gets a `level` field.

| Name | Target level | Status | Copies | Note |
|------|--------------|--------|--------|------|
| Alice (Onboarding Specialist) | JUNIOR | ? | ? | BUY_TO_DECK |
| Ahmed (Accounting Assistant) | JUNIOR | ? | ? | +2 budget |
| Charles (Accountant) | SENIOR | ? | ? | +4 budget |
| Donna (Insider) | SENIOR | ? | ? | Contract scout/purge |
| Eve (Downsizing Manager) | SENIOR | ? | ? | Dismiss + budget |
| Tina (HR trainee) | JUNIOR | ? | ? | Dismiss |
| Francis (Contracting Coordinator) | SENIOR | ? | ? | "Hire to play, dismiss" — rule to clarify |
| Grace (Headhunter) | SENIOR | ? | ? | Employee scout/purge |
| Haruto (CFO) | SENIOR | ? | ? | +5 budget, dismiss intern |

---

## Items (`src/data/items.tsx`)

Source: 13 cards. Target: 1-2× duplication, text canonization.

| Name | Status | Copies | Note |
|------|--------|--------|------|
| Drawing tablet | ? | ? | +2 creativity |
| Mechanical keyboard | ? | ? | +2 knowledge |
| Flipchart | ? | ? | +2 organization |
| Top hat | ? | ? | +1 budget |
| Programming socks | ? | ? | +budget + open source skill bonus |
| Energy drink (sic: "drinnk") | REWORK | ? | Typo fix |
| Investment portfolio | ? | ? | Destroy → +3 budget |
| Piggy bank | ? | ? | Destroy → +3 budget |
| Beanbag chair | ? | ? | +2 prestige end-game |
| Foosball table | ? | ? | +5 prestige end-game |
| Pristine Programs (sic: "famout") | REWORK | ? | Flavor text typo |
| A holy scroll | ? | ? | |
| Design handbook | ? | ? | |

---

## Features (`src/data/functional_contracts.tsx`)

Source: 30 cards. Target: keep 20-25, remove `sector` field, fix typos.

| ID | Name | Status | Copies | Note |
|----|------|--------|--------|------|
| C-001 | Landing page | ? | ? | sector to remove |
| C-002 | User Authentication | ? | ? | |
| C-003 | Database Setup | ? | ? | |
| C-004 | API Integration | ? | ? | |
| C-005 | Responsive Design | ? | ? | |
| C-006 | Security Audit | ? | ? | |
| C-007 | Deployment Automation | ? | ? | |
| C-008 | Performance Optimization | ? | ? | sector to remove |
| C-009 | User Analytics | ? | ? | |
| C-010 | Product research | ? | ? | |
| C-011 | Payment processing | ? | ? | |
| C-012 | Product description copywriting | ? | ? | |
| C-013 | Permission handling | ? | ? | |
| C-014 | Business workflows | ? | ? | |
| C-015 | Push notifications | ? | ? | |
| C-016 | Reporting | ? | ? | |
| C-017 | User manual | ? | ? | |
| C-018 | Custom font face | ? | ? | |
| C-019 | Hover texts | ? | ? | |
| C-020 | Logo | ? | ? | |
| C-021 | Legal compliance | REWORK | ? | "everythinh" typo |
| C-022 | Accessible design | REWORK | ? | "Differnces" typo |
| C-023 | Customer Support Chatbot | ? | ? | |
| C-024 | Interactive Tutorial | ? | ? | |
| C-025 | Social Media Integration | ? | ? | |
| C-026 | Multilingual Support | ? | ? | |
| C-027 | Advanced Search | ? | ? | |
| C-028 | Personalized Recommendations | ? | ? | |
| C-029 | Gamification | ? | ? | |
| C-030 | Offline Mode | ? | ? | |

---

## Technologies (`src/data/tecnical_contracts.tsx`)

Source: ~17 cards (one duplicated `T-017`!). Target: ~10-12 unique, 2×
duplicated. Every card's top half must be a standalone meaningful ongoing
effect.

| ID | Name | Status | Copies | Note |
|----|------|--------|--------|------|
| T-001 | Microtransactions | ? | ? | empty top → needs a top effect |
| T-002 | Version control system | ? | ? | top: first 3+ assign trigger |
| T-003 | Agile Methodology | ? | ? | |
| T-004 | Automated Testing | REWORK | ? | TEST_RUN/BUG_FIX undefined |
| T-005 | Continuous Integration | ? | ? | |
| T-006 | Cloud Infrastructure | ? | ? | |
| T-007 | Machine Learning Algorithms | REWORK | ? | top "+⭐ end of game" is not persistent |
| T-008 | User Experience Optimization | ? | ? | sector to remove |
| T-009 | Low Code Solution | ? | ? | SET_KNOWLEDGE_REQ to clarify |
| T-010 | Design handbook | ? | ? | |
| T-011 | Reusable UI components | ? | ? | empty top |
| T-012 | Logging framework | ? | ? | empty top |
| T-013 | Code sharing platform | ? | ? | |
| T-014 | Debugging tools | ? | ? | |
| T-015 | Issue tracker | ? | ? | |
| T-016 | Headhunting algorithms | ? | ? | |
| T-017a | Custom font | REWORK | ? | duplicate cardNumber |
| T-017b | Spreadsheet macros | REWORK | ? | duplicate cardNumber |

---

## Starter Deck (`src/data/starter_employees.tsx`)

Target: 1 CEO + 9 interns. Exact ratio to be tuned.

| Name | Target level | Status | Copies / player | Note |
|------|--------------|--------|------------------|------|
| CEO ("You") | SENIOR | REWORK | 1 | Ability to be finalized |
| Dev Intern | JUNIOR | KEEP | 5 (placeholder) | 1/1/1 stat, cost 0 |
| HR Intern | JUNIOR | KEEP | 4 (placeholder) | +1 budget, cost 0 |

---

## Prestige Employee (new)

| Name | Cost | Prestige | Status | Copies | Note |
|------|------|----------|--------|--------|------|
| Prestige Employee (placeholder) | X | Y | NEW | ~10 | Single unique, 1 market slot, deck-out = end trigger |
