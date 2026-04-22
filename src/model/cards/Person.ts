import {Playable} from "./Playable";
import {TriggeredAbility} from "./TriggeredAbility";
import {Hobby} from "./Hobby";
import { Stats } from "../Stats";
import TranslatedString from "../TranslatedString";

export interface Person extends Playable {
    title?: TranslatedString
    hobby?: Hobby;
    triggeredAbilities: TriggeredAbility[];
    level?: Level;
}

export enum Level {
    JUNIOR,
    MEDIOR,
    SENIOR,
}

export interface Programmer extends Person {
    level: Level
    skills: Stats
}