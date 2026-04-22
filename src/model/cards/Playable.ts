import { Stats } from "../Stats";
import TranslatedString from "../TranslatedString";
import { Effect } from "./Effect";
import { TriggeredAbility } from "./TriggeredAbility";

export interface Playable {
    name?: TranslatedString;
    text?: TranslatedString;
    flavorText?: TranslatedString;
    effects?: Effect[];
    triggeredAbilities?: TriggeredAbility[];
    cost: number;
    prestige?: number;
    dismissible?: boolean;
    dismissEffects?: Effect[];
    photoSrc?: string;
    /** Physical copies to emit in app print / PDF mode; screen shows one. */
    printCount?: number;
}
