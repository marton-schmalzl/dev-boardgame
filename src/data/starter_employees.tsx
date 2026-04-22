import { Level, Person, Programmer } from "../model/cards/Person";
import { Hobby } from "../model/cards/Hobby";
import { TaskCompletion, TechAssignment } from "../model/cards/TriggeredAbility";
import { StatBonus } from "../model/cards/Effect";
import { Icons } from "../icons";
import React from "react";

const IconSpan = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex align-middle items-center justify-center translate-y-[-1px]">
        {children}
    </span>
);

export const starter: Programmer[] = [
    {
        name: { en: 'You' },
        title: { en: 'CEO' },
        effects: [
            { effectType: "BUDGET", value: 2 },
            { effectType: "SCOUT_CONTRACTS", value: 3 },
            { effectType: "PURGE_CONTRACT", value: 1 },
        ],
        triggeredAbilities: [],
        text: { en: <span>➕<IconSpan><Icons.Budget size={14} /><Icons.Budget size={14} /></IconSpan>, Look at the top 3 cards of the contract deck. Put each of them back either at the top or the bottom of the deck, in any order. Purge up to 1 card from the contract row.</span> },

        flavorText: { en: 'Always on the lookout for new opportunities.' },
        cost: 0,
        prestige: 0,
        photoSrc: '',
        skills: { creativity: 2, knowledge: 2, organization: 2 },
        level: Level.SENIOR,
    },
    {
        name: { en: '' },
        title: { en: 'HR Intern' },
        effects: [{ effectType: "BUDGET", value: 1 }],
        triggeredAbilities: [],
        text: { en: <span>➕<IconSpan><Icons.Budget size={14} /></IconSpan></span> },
        flavorText: { en: 'Just happy to be here.' },
        cost: 0,
        prestige: 0,
        photoSrc: '',
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        level: Level.JUNIOR,
    },
    {
        name: { en: '' },
        title: { en: 'Dev Intern' },
        effects: [],
        triggeredAbilities: [],
        text: {},
        flavorText: { en: 'Just happy to be here.' },
        cost: 0,
        prestige: 0,
        photoSrc: '',
        skills: { creativity: 1, knowledge: 1, organization: 1 },
        level: Level.JUNIOR,
    },
]

