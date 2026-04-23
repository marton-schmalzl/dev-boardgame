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
    /**
     * Internal book-keeping flag: this card is a placeholder / draft and
     * has not been finalized. Surfaced as a small "?" badge in preview
     * mode (hidden in print).
     */
    candidate?: boolean;
    /**
     * Internal designer note (potential issues, open decisions, etc.).
     * Surfaced as a small "!" badge in preview mode with a hover
     * tooltip showing the note text (hidden in print).
     */
    notes?: string;
}
