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

export const backoffice: Person[] = [
    {
        name: { en: 'Alice' },
        title: { en: 'Onboarding Specialist' },
        effects: [{ effectType: "BUDGET", value: 2 }, { effectType: "BUY_TO_DECK", value: 1 }],
        triggeredAbilities: [],
        text: { en: <span>➕<IconSpan><Icons.Budget size={14} /></IconSpan>, When hiring an employee, put them on the top of your deck instead of your discard.</span> },
        flavorText: { en: 'Gets you in the door with a smile.' },
        cost: 2,
        prestige: 0,
        photoSrc: 'alice.jpg'
    },
    {
        name: { en: 'Ahmed' },
        title: { en: 'Accounting Assistant' },
        effects: [{ effectType: 'BUDGET', value: 2 }],
        triggeredAbilities: [],
        text: { en: <span>➕<IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan></span> },
        flavorText: { en: 'Counts every penny, twice.' },
        cost: 3,
        prestige: 0,
        photoSrc: 'ahmed.jpg'
    },
    {
        name: { en: 'Charles' },
        title: { en: 'Accountant' },
        effects: [{ effectType: 'BUDGET', value: 4 }],
        triggeredAbilities: [],
        text: { en: <span>➕<IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan></span> },
        flavorText: { en: 'The taxman’s best friend.' },
        cost: 5,
        prestige: 0,
        photoSrc: 'charles.jpg'
    },
    {
        name: { en: 'Donna' },
        title: { en: 'Insider' },
        effects: [{ effectType: 'SCOUT_CONTRACTS', value: 5 }, { effectType: 'PURGE_CONTRACT', value: 2 }],
        triggeredAbilities: [],
        text: { en: 'Look at the top 5 cards of the contract deck. Put each of them back either at the top or the bottom of the deck, in any order. Purge up to 2 cards from the contract row.' },
        flavorText: { en: 'Knows the right people.' },
        cost: 3,
        prestige: 0,
        photoSrc: 'donna.jpg'
    },
    {
        name: { en: 'Eve' },
        title: { en: 'Downsizing Manager' },
        effects: [{ effectType: 'DISMISS', value: 1 }, { effectType: "BUDGET", value: 3 }],
        triggeredAbilities: [],
        text: { en: <span>➕<IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan> You may dismiss an employee from your hand or discard pile</span> },
        flavorText: { en: 'Nobody likes the axe, but someone has to wield it.' },
        cost: 4,
        prestige: 0,
        photoSrc: 'eve.jpg'
    },
    {
        name: { en: 'Tina' },
        title: { en: 'HR trainee' },
        effects: [{ effectType: 'DISMISS', value: 1 }],
        triggeredAbilities: [],
        text: { en: 'You may dismiss an employee from your hand or discard pile' },
        flavorText: { en: 'Will happily record a tiktok dance 15 minutes after firing someone.' },
        cost: 2,
        prestige: 0,
        photoSrc: 'tina.jpg'
    },
    {
        name: { en: 'Francis' },
        title: { en: 'Contracting Coordinator' },
        effects: [{ effectType: 'BUDGET', value: 2 }],
        triggeredAbilities: [],
        text: { en: "Put an employee directly into play while paying 2 less than its cost. At the end, dismiss them." },
        flavorText: { en: 'Temporary is his middle name.' },
        cost: 4,
        prestige: 0,
        photoSrc: 'francis.jpg'
    },
    {
        name: { en: 'Grace' },
        title: { en: 'Headhunter' },
        effects: [{ effectType: 'SCOUT_EMPLOYEES', value: 5 }, { effectType: 'PURGE_PERSON', value: 2 }],
        triggeredAbilities: [],
        text: { en: 'Look at the top 5 cards of any employee deck. Put each of them back either at the top or the bottom of the deck, in any order. Purge up to 2 cards from the corresponding employee market.' },
        flavorText: { en: 'Finds talent, wherever it’s hiding.' },
        cost: 4,
        prestige: 0,
        photoSrc: 'grace.jpg'
    },
    {
        name: { en: 'Haruto' },
        title: { en: 'CFO' },
        effects: [{ effectType: 'BUDGET', value: 5 }],
        triggeredAbilities: [],
        text: { en: <span>➕<IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan><IconSpan><Icons.Budget size={14} /></IconSpan> You may dismiss a backoffice intern from your hand or discard pile</span> },
        flavorText: { en: 'Runs a tight fiscal ship.' },
        cost: 7,
        prestige: 0,
        photoSrc: 'haruto.jpg'
    },
]

export const employees: Programmer[] = [
    {
        name: { en: 'John' },
        title: { en: 'Mentor' },
        level: Level.SENIOR,
        effects: [{ effectType: 'TRAINING', value: 3 }],
        triggeredAbilities: [],
        text: { en: "Dismiss a junior programmer. Hire a medior programmer without paying its cost." },
        flavorText: { en: 'Turns rookies into pros.' },
        cost: 5,
        skills: { creativity: 0, knowledge: 3, organization: 1 },
        prestige: 0,
        photoSrc: "john.jpg"
    },
    {
        name: { en: 'Li Na' },
        title: { en: 'Product Owner' },
        level: Level.SENIOR,
        effects: [{ effectType: 'DRAW_UNTIL_PERSON', value: 1 }],
        triggeredAbilities: [],
        text: { en: "Draw cards until you draw an employee card" },
        flavorText: { en: 'She owns the roadmap.' },
        cost: 6,
        skills: { creativity: 1, knowledge: 1, organization: 4 },
        photoSrc: "li_na.jpg"
    },
    {
        name: { en: 'Jake' },
        title: { en: 'Job Hopper' },
        level: Level.MEDIOR,
        triggeredAbilities: [{ triggerTypes: [new TaskCompletion()], effect: { effectType: "DISMISS_SELF", mandatory: true } }],
        flavorText: { en: 'Always chasing the next big thing.' },
        cost: 5,
        text: { en: "When this employee completes an assignment you must dismiss them." },
        skills: { creativity: 6, knowledge: 4, organization: 5 },
        photoSrc: "jake.jpg"
    },
    {
        name: { en: 'Diego' },
        title: { en: 'Some Dude' },
        level: Level.MEDIOR,
        triggeredAbilities: [{ triggerTypes: [new TaskCompletion()], effect: { effectType: "DISMISS_SELF" } }],
        flavorText: { en: 'Just a regular guy getting the job done.' },
        cost: 3,
        text: { en: "You may dismiss this employee after they complete an assignment." },
        skills: { creativity: 3, knowledge: 3, organization: 3 },
        photoSrc: "diego.jpg"
    },
    {
        name: { en: 'Kyle' },
        title: { en: 'One Angry Programmer' },
        level: Level.SENIOR,
        triggeredAbilities: [{ triggerTypes: [new TaskCompletion()], effect: { effectType: "DESTROY_ASSIGNED_ITEM", mandatory: true } }],
        flavorText: { en: 'Drywalls are his sworn enemy.' },
        cost: 4,
        text: { en: "After completing an assignment, destroy any item equipped to this, or one from the discard if no card equipped." },
        skills: { creativity: 3, knowledge: 3, organization: 3 },
        photoSrc: "kyle.jpg"
    },
    {
        name: { en: 'Randy' },
        title: { en: 'Resume-Driven Developer' },
        level: Level.JUNIOR,
        triggeredAbilities: [{ triggerTypes: [new TechAssignment(true)], effect: { effectType: new StatBonus(1, 1, 1) } }],
        flavorText: { en: 'Only wants to do stuff he can post on LinkedIn later.' },
        cost: 3,
        text: { en: <span>When assigned to an Open Source Technology assignment: ➕<IconSpan><Icons.Creativity size={14} /></IconSpan>,➕<IconSpan><Icons.Knowledge size={14} /></IconSpan>,➕<IconSpan><Icons.Organization size={14} /></IconSpan></span> },
        skills: { creativity: 3, knowledge: 2, organization: 1 },
        photoSrc: "randy.jpg"
    },
    {
        name: { en: 'Sophia' },
        title: { en: 'Challenge Seeker' },
        level: Level.MEDIOR,
        triggeredAbilities: [{ triggerTypes: [new TaskCompletion({ knowledge: 5 })], effect: { effectType: "STORY_POINT", value: 1 } }],
        flavorText: { en: 'Never backs down from a tough task.' },
        cost: 4,
        text: { en: <span>When completing an assignment with <IconSpan><Icons.Knowledge size={14} /></IconSpan>(knowledge) requirement of 5 or higher gain an extra Progress Point</span> },
        skills: { creativity: 3, knowledge: 5, organization: 4 },
        photoSrc: "sophia.jpg"
    },
    {
        name: { en: 'Kwame' },
        title: { en: 'Overly Ambitious' },
        level: Level.JUNIOR,
        triggeredAbilities: [{ triggerTypes: [new TaskCompletion({ organization: 4 })], effect: { effectType: "PRESTIGE", value: 1 } }],
        flavorText: { en: 'A little too eager.' },
        cost: 2,
        text: { en: <span>When completing an assignment with <IconSpan><Icons.Organization size={14} /></IconSpan>(organization) requirement of 4 or higher gain an extra Prestige</span> },
        skills: { creativity: 1, knowledge: 2, organization: 1 },
        photoSrc: "kwame.jpg"
    },
    {
        name: { en: 'Mason' },
        title: { en: 'Lone Wolf' },
        level: Level.SENIOR,
        triggeredAbilities: [{ triggerTypes: [new TaskCompletion({}, { count: 0, compare: "EXACT" })], effect: { effectType: "STORY_POINT", value: 3 } }],
        flavorText: { en: 'Works best when left alone.' },
        cost: 5,
        text: { en: "When completing an assignment alone gain an 3 extra Progress Points" },
        skills: { creativity: 4, knowledge: 5, organization: 3 },
        photoSrc: "mason.jpg"
    },
    {
        name: { en: 'Steve' },
        title: { en: 'Insecure Developer' },
        level: Level.SENIOR,
        triggeredAbilities: [{ triggerTypes: [new TaskCompletion({}, { count: 1, compare: "MIN", allJunior: true })], effect: { effectType: new StatBonus(0, -2, -2) } }],
        flavorText: { en: 'He doesn\'t like competition.' },
        cost: 5,
        text: { en: <span>When assigned to a task with another senior employee:➖<IconSpan><Icons.Knowledge size={14} /></IconSpan><IconSpan><Icons.Knowledge size={14} /></IconSpan>,➖<IconSpan><Icons.Organization size={14} /></IconSpan><IconSpan><Icons.Organization size={14} /></IconSpan></span> },
        skills: { creativity: 3, knowledge: 7, organization: 5 },
        photoSrc: "steve.jpg"
    },
    {
        name: { en: 'Nina' },
        title: { en: 'Inspiring Leader' },
        level: Level.SENIOR,
        triggeredAbilities: [],
        flavorText: { en: 'Inspires those around her to give their best.' },
        cost: 6,
        text: { en: <span>All junior developers assigned to this project gain:➕<IconSpan><Icons.Knowledge size={14} /></IconSpan>,➕<IconSpan><Icons.Organization size={14} /></IconSpan>,➕<IconSpan><Icons.Creativity size={14} /></IconSpan></span> },
        skills: { creativity: 3, knowledge: 4, organization: 5 },
        photoSrc: "nina.jpg"
    },
    {
        name: { en: 'Ye' },
        title: { en: 'College Dropout' },
        level: Level.JUNIOR,
        triggeredAbilities: [],
        flavorText: { en: 'I told you to do some **** for the kids' },
        cost: 2,
        skills: { creativity: 3, knowledge: 1, organization: 0 },
        photoSrc: "ye.jpg"
    },
    {
        name: { en: 'Emma' },
        title: { en: 'Honors Student' },
        level: Level.JUNIOR,
        triggeredAbilities: [],
        flavorText: { en: 'Top of the class, but still learning.' },
        cost: 4,
        skills: { creativity: 1, knowledge: 4, organization: 3 },
        photoSrc: "emma.jpg"
    },
    {
        name: { en: 'Zoe' },
        title: { en: 'Quick Learner' },
        level: Level.JUNIOR,
        triggeredAbilities: [],
        flavorText: { en: 'Picks up skills fast.' },
        cost: 3,
        text: { en: <span>When assigned alongside a senior employee gain: ➕<IconSpan><Icons.Creativity size={14} /></IconSpan>➕<IconSpan><Icons.Knowledge size={14} /></IconSpan>➕<IconSpan><Icons.Organization size={14} /></IconSpan></span> },
        skills: { creativity: 1, knowledge: 1, organization: 1 },
        photoSrc: "zoe.jpg"
    },
    {
        name: { en: 'Luke' },
        title: { en: 'Copycat' },
        level: Level.JUNIOR,
        triggeredAbilities: [],
        flavorText: { en: 'Imitation is the sincerest form of flattery.' },
        cost: 3,
        text: { en: "Copy the stats of one of your other employees assigned to the same project" },
        skills: { creativity: 0, knowledge: 0, organization: 0 },
        photoSrc: "luke.jpg"
    },
    {
        name: { en: 'Tom' },
        title: { en: 'Natural architect' },
        level: Level.JUNIOR,
        triggeredAbilities: [],
        flavorText: { en: 'Dreams in UML' },
        cost: 2,
        skills: { creativity: 1, knowledge: 1, organization: 4 },
        photoSrc: "tom.jpg"
    },
]

