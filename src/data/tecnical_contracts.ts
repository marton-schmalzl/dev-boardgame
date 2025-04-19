import { StatBonus } from "../model/cards/Effect";
import { FeatureAssignment, Hire, TaskAssignment, TaskCompletion, TechAssignment, TechCompletion } from "../model/cards/TriggeredAbility";
import { Technology } from "../model/contracts/Contract";
import { Industry } from "../model/contracts/Industry";

export const tecnical_contracts: Technology[] = [
    {
        cardNumber: "T-001",
        name: { en: "Microtransactions" },
        photoSrc: 'microtransactions.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 2,
            organization: 6,
            creativity: 3,
        },
        sector: Industry.BUREAUCRACY,
        storyPoints: 0,
        completionEffects: [{ effectType: "SUPPORT", value: 1 }],
        bottomEffects: [
            {
                triggerTypes: ["NONE"],
                effect: { effectType: "BUDGET", value: 1},
            }
        ],
        bottomDescription: {en: "At the start of your turn gain ➕💲"}
    },
    {
        cardNumber: "T-002",
        name: { en: "Version control system" },
        photoSrc: 'source_control.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 6,
            organization: 8,
            creativity: 2,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
            {
                triggerTypes: [new TaskAssignment(undefined, { count: 3, compare: "MIN" })],
                effect: { effectType: new StatBonus(0, 0, 2), },
            }
        ],
        topDescription: {en: "The first time you assign at least 3 employees to a task, gain ➕⚙️⚙️"},
        bottomEffects: [
            {
                triggerTypes: [new TaskAssignment(undefined, { count: 2, compare: "MIN" })],
                effect: { effectType: new StatBonus(1, 1, 1), },
                multiUse: true,
            }
        ],
        bottomDescription: {en:"EACH time you assign at least 2 employees to a task, gain ➕⚙️, ➕💡, ➕🗒️"},
    },
    {
        cardNumber: "T-003",
        name: { en: "Agile Methodology" },
        photoSrc: 'agile_methodology.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 5,
            organization: 7,
            creativity: 4,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
            {
                triggerTypes: ["PROJECT_START"],
                effect: { effectType: "ORGANIZATION", value: 1 },
            },
        ],
        topDescription: { en: "When you start a project, gain ➕🗒️ for your first task" },
        bottomEffects: [
            {
                triggerTypes: [new TaskCompletion()],
                effect: {
                    effectType: new StatBonus(0,0,1),
                },
                multiUse: true,
            },
        ],
        bottomDescription: {
            en: "Each time you complete a task, for your next task on the same turn gain ➕⚙️, ➕💡, ➕🗒️",
        },
    },
    {
        cardNumber: "T-004",
        name: { en: "Automated Testing" },
        photoSrc: 'automated_testing.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 7,
            organization: 5,
            creativity: 3,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
            // {
            //     triggerTypes: ["TEST_RUN"],
            //     effect: { effectType: "KNOWLEDGE", value: 1 },
            // },
        ],
        topDescription: { en: "When you run tests, gain ➕⚙️" },
        bottomEffects: [
            // {
            //     triggerTypes: ["BUG_FIX"],
            //     effect: { effectType: "KNOWLEDGE", value: 2 },
            //     multiUse: true,
            // },
        ],
        bottomDescription: { en: "Each time you fix a bug, gain ➕⚙️⚙️" },
    },
    {
        cardNumber: "T-005",
        name: { en: "Continuous Integration" },
        photoSrc: 'continuos_integration.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 6,
            organization: 7,
            creativity: 3,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
            {
                triggerTypes: [],
                effect: { effectType: "ORGANIZATION", value: 1 },
            },
        ],
        topDescription: { 
            en: "After each completed task, gain an extra progress point",
        },
        bottomEffects: [
        ],
        bottomDescription: {
            en: "After each completed task, gain ➕⚙️⚙️ for your next task that turn",
        },
    },
    {
        cardNumber: "T-006",
        name: { en: "Cloud Infrastructure" },
        photoSrc: 'cloud_infra.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 8,
            organization: 4,
            creativity: 3,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [{ effectType: "BUDGET", value: -2 }],
        topEffects: [
        ],
        topDescription: { en: "When you assign an employee with ⚙️ skill of 5 or more, gain ➕⚙️" },
        bottomEffects: [
            {
                triggerTypes: [new TaskCompletion()],
                effect: { effectType: "BUDGET", value: 3 },
                multiUse: true,
            },
        ],
        bottomDescription: {
            en: "Each time you complete a project, gain ➕💲💲💲",
        },
    },
    {
        cardNumber: "T-007",
        name: { en: "Machine Learning Algorithms" },
        photoSrc: 'machine_learning.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 9,
            organization: 3,
            creativity: 7,
        },
        sector: Industry.IT,
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
        ],
        topDescription: { en: "+⭐ at the end of game" },
        bottomEffects: [
        ],
        bottomDescription: {
            en: "➕⚙️ towards an assignment. Put a marker on it every time this is activated (max 3). ➕⚙️ for each marker",
        },
    },
    {
        cardNumber: "T-008",
        name: { en: "User Experience Optimization" },
        photoSrc: 'ux.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 4,
            organization: 5,
            creativity: 8,
        },
        storyPoints: 0,
        completionEffects: [],
        topEffects: [
            {
                triggerTypes: [new FeatureAssignment()],
                effect: { effectType: new StatBonus(0,1,0), value: 1 },
            },
        ],
        sector: Industry.ENTERTAINMENT,
        topDescription: { en: "Gain ➕💡 towards a feature assignment" },
        bottomEffects: [
            {
                triggerTypes: [],
                effect: { effectType: "CREATIVITY", value: 2 },
                multiUse: true,
            },
        ],
        bottomDescription: {
            en: "Each time you implement a new feature, gain ➕💡💡 for the next feature on that turn.",
        },
    },
    
    {
        cardNumber: "T-009",
        name: { en: "Low Code Solution" },
        photoSrc: 'directus.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 5,
            organization: 3,
            creativity: 3,
        },
        storyPoints: 0,
        completionEffects: [],
        sector: Industry.IT,
        topEffects: [
            {
                triggerTypes: [new TaskAssignment()],
                effect: { effectType: "KNOWLEDGE", value: 1 },
                multiUse: false,
            },
        ],
        topDescription: { en: "Gain ➕⚙️ towards an assignment" },
        bottomEffects: [
            {
                triggerTypes: [new TaskAssignment(undefined, undefined, {knowledge: 3})],
                effect: { effectType: "SET_KNOWLEDGE_REQ", value: 1 },
            },
        
        ],
        bottomDescription: {
            en: "Set the ⚙️ requirement of a task with ⚙️ requirement of 3 or below to 0.",
        },
    },

    {
        cardNumber: "T-010",
        name: { en: "Design handbook" },
        photoSrc: 'design.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 3,
            organization: 3,
            creativity: 5,
        },
        storyPoints: 0,
        completionEffects: [],
        sector: Industry.IT,
        topEffects: [
            {
                triggerTypes: [new TaskAssignment()],
                effect: { effectType: "CREATIVITY", value: 1 },
                multiUse: false,
            },
        ],
        topDescription: { en: "Gain ➕💡 towards an assignment" },
        bottomEffects: [
            {
                triggerTypes: [new TaskAssignment(undefined, undefined, {knowledge: 3})],
                effect: { effectType: "SET_CREATIVITY_REQ", value: 0 },
            },
        
        ],
        bottomDescription: {
            en: "Set the 💡 requirement of a task with 💡 requirement of 3 or below to 0.",
        },
    },
    {
        cardNumber: "T-011",
        name: { en: "Reusable UI components" },
        photoSrc: 'components.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 3,
            organization: 3,
            creativity: 6,
        },
        storyPoints: 0,
        completionEffects: [],
        sector: Industry.IT,
        bottomEffects: [
            {
                triggerTypes: [new TaskAssignment()],
                effect: { effectType: "CREATIVITY", value: 2 },
                multiUse: true,
            },
        ],
        bottomDescription: { en: "Gain ➕💡💡 towards every assignment" },
        topEffects: [
        ],
        topDescription: {
            en: "",
        },
    },
    {
        cardNumber: "T-012",
        name: { en: "Logging framework" },
        photoSrc: 'logging.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 3,
            organization: 1,
            creativity: 0,
        },
        storyPoints: 0,
        completionEffects: [],
        sector: Industry.IT,
        topEffects: [
        ],
        topDescription: {
            en: "",
        },
        bottomEffects: [
            {
                triggerTypes: [new TaskAssignment()],
                effect: { effectType: "KNOWLEDGE", value: 1 },
                multiUse: true,
            },
        ],
        bottomDescription: { en: "Gain ➕⚙️ towards every assignment" },
    },
    {
        cardNumber: "T-013",
        name: { en: "Code sharing platform" },
        photoSrc: 'github.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 5,
            organization: 4,
            creativity: 2,
        },
        storyPoints: 0,
        completionEffects: [],
        sector: Industry.IT,
        topEffects: [
            {
                triggerTypes: [new TechAssignment(true)],
                effect: { effectType: new StatBonus(1,1,1) },
                multiUse: true,
            },
        ],
        topDescription: {
            en: "➕⚙️ ➕💡 ➕🗒️ towards each Open Source Technology assginment",
        },
        bottomEffects: [
            {
                triggerTypes: [new TechCompletion(true)],
                effect: { effectType: "PRESTIGE", value: 2 },
                multiUse: true,
            },
        ],
        bottomDescription: { en: "Gain ➕⭐⭐⭐ on Open Source Technology completion" },
    },
    {
        cardNumber: "T-014",
        name: { en: "Debugging tools" },
        photoSrc: 'debugger.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 5,
            organization: 3,
            creativity: 0,
        },
        storyPoints: 0,
        completionEffects: [],
        sector: Industry.IT,
        topEffects: [
            {
                triggerTypes: [new TaskAssignment()],
                effect: { effectType: new StatBonus(1,0,1) },
                multiUse: false,
            },
        ],
        topDescription: { en: "➕⚙️➕🗒️ for an assignment", },
        bottomEffects: [
            {
                triggerTypes: [new TaskAssignment({knowledge: 5})],
                effect: { effectType: new StatBonus(2,0,0) },
                multiUse: true,
            },
        ],
        bottomDescription: { en: "➕⚙️⚙️ towards each assginment with ⚙️ requirement of 5+", },
    },
    {
        cardNumber: "T-015",
        name: { en: "Issue tracker" },
        photoSrc: 'jira.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 3,
            organization: 6,
            creativity: 2,
        },
        storyPoints: 0,
        completionEffects: [],
        sector: Industry.IT,
        topEffects: [
            {
                triggerTypes: [new TaskAssignment()],
                effect: { effectType: new StatBonus(0,0,2) },
                multiUse: false,
            },
        ],
        topDescription: { en: "➕🗒️🗒️ towards an assignment", },
        bottomEffects: [
            {
                triggerTypes: [new TaskAssignment(undefined, {count: 1, compare: "MIN"})],
                effect: {
                    effectType: new StatBonus(0,0,2),
                },
                multiUse: true,
            },
        ],
        bottomDescription: {
            en: "Each time you assing more than 1 worker to a task gain ➕🗒️🗒️",
        },
    },
    
    {
        cardNumber: "T-016",
        name: { en: "Headhunting algorithms" },
        photoSrc: 'linkedin.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 3,
            organization: 6,
            creativity: 3,
        },
        storyPoints: 0,
        completionEffects: [],
        sector: Industry.IT,
        topEffects: [
            {
                triggerTypes: ["PROJECT_START"],
                effect: { effectType:  "HIRE_WITH_MAX_COST_TO_TOP", value: 3},
                multiUse: false,
            },
        ],
        topDescription: { en: "Gain an employee that costs 3 or less on project start. Place them on top of your deck.", },
        bottomEffects: [
            {
                triggerTypes: [new Hire(4)],
                effect: {
                    effectType: "PRESTIGE",
                    value: 2
                },
                multiUse: true,
            },
        ],
        bottomDescription: {
            en: "Each time you hire an employee that costs 4 or more, gain ➕⭐⭐",
        },
    },

    {
        cardNumber: "T-017",
        name: { en: "Custom font" },
        photoSrc: 'excel.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 0,
            organization: 1,
            creativity: 4,
        },
        storyPoints: 0,
        completionEffects: [],
        sector: Industry.IT,
        topEffects: [
            {
                triggerTypes: [new TaskAssignment()],
                effect: { effectType:  new StatBonus(0,0,1)},
                multiUse: true,
            },
        ],
        topDescription: { en: "Gain ➕⭐ towards each assignment", },
        bottomEffects: [
            {
                triggerTypes: [new TaskAssignment({creativity: 6})],
                effect: {
                    effectType: new StatBonus(0,2,0),
                },
                multiUse: false,
            },
        ],
        bottomDescription: {
            en: "Gain ➕⭐⭐ towards an assignment with ⭐ requirement of 6 or higher",
        },
    },

    

    {
        cardNumber: "T-017",
        name: { en: "Spreadsheet macros" },
        photoSrc: 'excel.jpg',
        flavorText: {},
        text: {},
        requiredSkills: {
            knowledge: 2,
            organization: 3,
            creativity: 0,
        },
        storyPoints: 0,
        completionEffects: [],
        sector: Industry.IT,
        topEffects: [
            {
                triggerTypes: [new TaskAssignment()],
                effect: { effectType:  new StatBonus(0,1,0)},
                multiUse: true,
            },
        ],
        topDescription: { en: "Gain ➕🗒️ towards each assignment", },
        bottomEffects: [
            {
                triggerTypes: [new TaskAssignment({organization: 6})],
                effect: {
                    effectType: new StatBonus(0,0,2),
                    value: 2
                },
                multiUse: false,
            },
        ],
        bottomDescription: {
            en: "Gain ➕🗒️🗒️ towards an assignment with 🗒️ requirement of 6 or higher",
        },
    },
    
]
