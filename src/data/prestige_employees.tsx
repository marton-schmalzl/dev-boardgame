import { Level, Programmer } from "../model/cards/Person";
import { Icons } from "../icons";
import React from "react";

// Prestige Employee — see DDR-0009.
//
// MVP placeholder configuration:
//   - 1 unique card; ~10 copies in the dedicated Prestige Employee deck
//   - 1 permanent market slot (top of the deck)
//   - cost / prestige / copies are placeholders, see open-questions.md →
//     "Prestige Employee cost / value"
//   - no in-game effect: this is a Province-style money dump that exists
//     to give budget strategies a concrete pull target and to provide
//     the runaway-end trigger when the deck runs out
//
// Flavor: "Someone's Nephew" — pure nepotism hire. Doesn't do anything,
// but having him on the org chart somehow keeps the C-suite happy and
// the brand looking well-connected. The slot is intentionally generic
// so post-MVP variants (cheaper tiers, weak-ability hires, etc.) can
// slot in without breaking the existing card.
export const prestige_employees: Programmer[] = [
    {
        name: { en: '' },
        title: { en: "Someone's Nephew" },
        effects: [],
        triggeredAbilities: [],
        text: {
            en: (
                <span className="inline-flex flex-wrap items-center gap-1">
                    End of game:
                    <Icons.Prestige size={14} className="shrink-0" />
                    <Icons.Prestige size={14} className="shrink-0" />
                    <Icons.Prestige size={14} className="shrink-0" />
                    <Icons.Prestige size={14} className="shrink-0" />
                    <Icons.Prestige size={14} className="shrink-0" />
                </span>
            ),
        },
        flavorText: { en: 'No skills, no code, but the boss insists.' },
        cost: 7,
        prestige: 5,
        printCount: 10,
        photoSrc: '',
        skills: {},
        level: Level.SENIOR,
    },
];
