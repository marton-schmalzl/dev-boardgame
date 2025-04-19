import { Industry } from "../contracts/Industry";
import { Stats } from "../Stats";
import TranslatedString from "../TranslatedString";
import { Effect } from "./Effect";
import { Hobby } from "./Hobby";
import { Level } from "./Person";

export class TaskCompletion {
        constructor(
            public minStats?: Stats,
            public teamMateComp?: { count?: number, compare?: "MIN" | "MAX" | "EXACT", allJunior?: boolean, allSenior?: boolean},
            public maxStats?: Stats,
        ) { }
}
export class TaskAssignment extends TaskCompletion {}
export class FeatureCompletion extends TaskCompletion { constructor(public industry?: Industry, minStats?: Stats, maxStats?: Stats) { super(minStats, undefined, maxStats) } }
export class FeatureAssignment extends FeatureCompletion { }
export class TechCompletion extends TaskCompletion { constructor(public openSource?: boolean, minStats?: Stats, maxStats?: Stats) { super(minStats, undefined, maxStats) } }
export class TechAssignment extends TechCompletion { }
export class Hire {constructor(public minCost?: number, maxCost?: number, Level?: Level){}}

export type TriggerTypes = Hobby | "NONE" | "ON_PLAY" | "DESTROY" | "DISMISS" | "DISCARD" | "ALL_JUNIOR_TEAMMATES" | "PROJECT_START"
    |TaskAssignment| FeatureCompletion | FeatureAssignment | TechCompletion | TechAssignment | Hire;
export interface TriggeredAbility {
    triggerTypes: TriggerTypes[];
    description?: TranslatedString;
    effect: Effect;
    multiUse?: boolean
}
