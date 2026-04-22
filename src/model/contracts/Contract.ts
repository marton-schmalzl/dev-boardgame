
import {Industry} from "./Industry";
import TranslatedString from "../TranslatedString";
import {Effect} from "../cards/Effect";
import { TriggeredAbility } from "../cards/TriggeredAbility";

export interface Contract {
    cardNumber?: string,
    name: TranslatedString,
    text?: TranslatedString,
    flavorText?: TranslatedString,
    requiredSkills: {
        knowledge: number;
        creativity: number;
        organization: number;
    }
    storyPoints: number;
    sector?: Industry;
    completionEffects?: Effect[];
    photoSrc?: string;
    /** Physical copies to emit in app print / PDF mode; screen shows one. */
    printCount?: number;
}

export interface Feature extends Contract {
    effectDescription?: TranslatedString;
}


export interface Technology extends Contract {
    openSourcePrestige: number;
    topEffects?: TriggeredAbility[];
    topDescription?: TranslatedString;
    bottomEffects?: TriggeredAbility[];
    bottomDescription?: TranslatedString;
}
