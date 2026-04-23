import { Stats } from "../model/Stats";
import { Item } from "../model/cards/Item";
import { TaskCompletion, TechAssignment } from "../model/cards/TriggeredAbility";
import { StatBonus } from "../model/cards/Effect";
import { Icons } from "../icons";
import React from "react";

const IconSpan = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex align-middle items-center justify-center translate-y-[-1px]">
        {children}
    </span>
);

export const items: Item[] = [
    {
        name: { en: 'Drawing tablet' },
        effects: [],
        text: {},
        flavorText: {},
        cost: 1,
        skills: { creativity: 2, knowledge: 0, organization: 0 },
        prestige: 0,
        photoSrc: "tablet.jpg"
    },
    {
        name: { en: 'Mechanical keyboard' },
        effects: [],
        text: {},
        flavorText: {},
        cost: 1,
        skills: { creativity: 0, knowledge: 2, organization: 0 },
        prestige: 0,
        photoSrc: "mechanical_keyboard.jpg"
    },
    {
        name: { en: 'Flipchart' },
        effects: [],
        text: {},
        flavorText: {},
        cost: 1,
        skills: { creativity: 0, knowledge: 0, organization: 2 },
        prestige: 0,
        photoSrc: "flipchart.jpg"
    },
    {
        name: { en: 'Top hat' },
        effects: [{ effectType: 'BUDGET', value: 1 }],
        text: { en: <span>➕<IconSpan><Icons.Budget size={14} /></IconSpan></span> },
        flavorText: {},
        cost: 1,
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        prestige: 0,
        photoSrc: "tophat.jpg"
    },
    {
        name: { en: 'Programming socks' },
        effects: [],
        triggeredAbilities: [{
            triggerTypes: [new TechAssignment(true)],
            effect: { effectType: new StatBonus(2, 0, 0) }
        }],
        text: { en: <span>When assigned to an Open Source Technology assignment: ➕<IconSpan><Icons.Creativity size={14} /></IconSpan>➕<IconSpan><Icons.Creativity size={14} /></IconSpan></span> },
        flavorText: { en: "Works particularly well on rust developers" },
        cost: 1,
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        prestige: 0,
        photoSrc: "programming_socks.jpg"
    },
    {
        name: { en: 'Energy drink' },
        effects: [],
        triggeredAbilities: [{
            triggerTypes: [new TaskCompletion()],
            effect: { effectType: 'BACK_TO_TOP_OF_DECK' }
        }],
        text: { en: "Instead of discarding the employee this item is equipped to, put them on top of your deck." },
        flavorText: { en: "Gives you wiiings" },
        cost: 1,
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        prestige: 0,
        photoSrc: "energy_drink.jpg"
    },
    {
        name: { en: 'Investment portfolio' },
        effects: [],
        triggeredAbilities: [{ triggerTypes: ['DESTROY'], effect: { effectType: 'BUDGET', value: 3 } }],
        text: { en: <span>Destroy this card to gain ➕<IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan></span> },
        flavorText: { en: "Stonks only go up 📈" },
        cost: 4,
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        prestige: 0,
        photoSrc: "stonks.jpg"
    },
    {
        name: { en: 'Piggy bank' },
        triggeredAbilities: [{ triggerTypes: ['DESTROY'], effect: { effectType: 'BUDGET', value: 2 } }],
        text: { en: <span>Destroy this card to gain ➕<IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan></span> },
        flavorText: {},
        cost: 2,
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        prestige: 0,
        photoSrc: "piggy_bank.jpg"
    },
    {
        name: { en: 'Beanbag chair' },
        flavorText: {},
        text: { en: <span>➕<IconSpan><Icons.Prestige size={14} /></IconSpan> at the end of the game</span> },
        cost: 2,
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        prestige: 2,
        photoSrc: "beanbag.jpg"
    },
    {
        name: { en: 'Foosball table' },
        flavorText: {},
        text: { en: <span>➕<IconSpan><Icons.Prestige size={14} /></IconSpan><IconSpan><Icons.Prestige size={14} /></IconSpan><IconSpan><Icons.Prestige size={14} /></IconSpan> at the end of the game</span> },
        cost: 4,
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        prestige: 5,
        photoSrc: "foosball.jpg"
    },
    {
        name: { en: 'Pristine Programs' },
        flavorText: { en: "A famous book by Uncle Rob" },
        cost: 4,
        skills: { creativity: 0, knowledge: 2, organization: 1 },
        prestige: 5,
        photoSrc: "pristine_programs.jpg"
    },
    {
        name: { en: 'A holy scroll' },
        cost: 4,
        skills: { creativity: 0, knowledge: 0, organization: 3 },
        flavorText: { en: "Dread it, run from it, destiny arrives all the same." },
        prestige: 5,
        photoSrc: "holy_scroll.jpg"
    },
    {
        name: { en: 'Design handbook' },
        cost: 4,
        skills: { creativity: 2, knowledge: 0, organization: 1 },
        prestige: 5,
        photoSrc: "design_handbook.jpg"
    },
    // --- Phase 6 design-slot candidates (balance.md / inventory.md) ---
    {
        name: { en: 'Candidate — Studio monitor (stat)' },
        effects: [],
        text: {},
        flavorText: { en: 'Placeholder — slot I-2-cre.' },
        cost: 2,
        skills: { creativity: 3, knowledge: 0, organization: 0 },
        prestige: 0,
        photoSrc: '',
        candidate: true,
        notes: 'Design slot I-2-cre (candidate).',
    },
    {
        name: { en: 'Candidate — Reference book (stat)' },
        effects: [],
        text: {},
        flavorText: { en: 'Placeholder — slot I-2-kn.' },
        cost: 2,
        skills: { creativity: 0, knowledge: 3, organization: 0 },
        prestige: 0,
        photoSrc: '',
        candidate: true,
        notes: 'Design slot I-2-kn (candidate).',
    },
    {
        name: { en: 'Candidate — Label maker (stat)' },
        effects: [],
        text: {},
        flavorText: { en: 'Placeholder — slot I-2-org.' },
        cost: 2,
        skills: { creativity: 0, knowledge: 0, organization: 3 },
        prestige: 0,
        photoSrc: '',
        candidate: true,
        notes: 'Design slot I-2-org (candidate).',
    },
    {
        name: { en: 'Candidate — Sticky workflow' },
        effects: [{ effectType: 'SCOUT_CONTRACTS', value: 2 }],
        triggeredAbilities: [],
        text: { en: 'Once per turn, look at the top 2 cards of the contract deck. Put each back on the top or the bottom in any order.' },
        flavorText: { en: 'Placeholder — slot I-3-wild-a.' },
        cost: 3,
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        prestige: 0,
        photoSrc: '',
        candidate: true,
        notes: 'Design slot I-3-wild-a (candidate).',
    },
    {
        name: { en: 'Candidate — Pocket notebook' },
        effects: [{ effectType: 'DRAW', value: 1 }],
        triggeredAbilities: [],
        text: { en: 'Once per turn, draw 1 card.' },
        flavorText: { en: 'Placeholder — slot I-3-wild-b.' },
        cost: 3,
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        prestige: 0,
        photoSrc: '',
        candidate: true,
        notes: 'Design slot I-3-wild-b (candidate).',
    },
    {
        name: { en: 'Candidate — Petty cash box' },
        triggeredAbilities: [{ triggerTypes: ['DESTROY'], effect: { effectType: 'BUDGET', value: 3 } }],
        text: { en: <span>Destroy this card to gain ➕<IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan></span> },
        flavorText: { en: 'Placeholder — slot I-3-budget.' },
        cost: 3,
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        prestige: 0,
        photoSrc: '',
        printCount: 2,
        candidate: true,
        notes: 'Design slot I-3-budget (candidate).',
    },
    {
        name: { en: 'Candidate — Trophy case' },
        flavorText: { en: 'Placeholder — slot I-5-prestige.' },
        text: { en: <span>➕<IconSpan><Icons.Prestige size={14} /></IconSpan><IconSpan><Icons.Prestige size={14} /></IconSpan><IconSpan><Icons.Prestige size={14} /></IconSpan><IconSpan><Icons.Prestige size={14} /></IconSpan><IconSpan><Icons.Prestige size={14} /></IconSpan><IconSpan><Icons.Prestige size={14} /></IconSpan><IconSpan><Icons.Prestige size={14} /></IconSpan> at the end of the game</span> },
        cost: 5,
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        prestige: 7,
        photoSrc: '',
        candidate: true,
        notes: 'Design slot I-5-prestige (candidate).',
    },
]
