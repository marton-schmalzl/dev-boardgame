import React from 'react';
import { Icons } from '../icons';
import { EffectType } from "../model/cards/Effect";
import { Hobby } from "../model/cards/Hobby";
import { TaskCompletion, TriggerTypes } from "../model/cards/TriggeredAbility";

type IconTags = EffectType | Hobby | TriggerTypes | 'TRIGGER_ICON';

function Icon(props: { tag: IconTags }) {
  // Use a wrapper only if necessary to maintain layout consistency with previous SVG
  // But Lucide icons are SVGs themselves, so we can probably render them directly.
  // The original component wrapped the FontAwesomeIcon in two nested SVGs, likely for scaling/positioning.
  // We'll trust Lucide's sizing for now but wrap in a span/div if needed for 'em' sizing context.

  const IconComponent = getIcon(props);
  if (!IconComponent) return null;

  return (
    <span style={{ fontSize: '1.2em', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <IconComponent size={'1em'} />
    </span>
  );
}

function getIcon(props: { tag: IconTags }) {
  switch (props.tag) {
    case "BUDGET":
      return Icons.Budget;
    case "KNOWLEDGE":
      return Icons.Knowledge;
    case "CREATIVITY":
      return Icons.Creativity;
    case "ORGANIZATION":
      return Icons.Organization;
    case "PRESTIGE":
      return Icons.Prestige;
    case "DISMISS":
      return Icons.Dismiss;
    case "DRAW":
      break;
    case "DRAW_UNTIL_PERSON":
      break;
    case "BUY_TO_DECK":
      break;
    case "BUY_FROM_TRASH":
      break;
    case "SCOUT_CONTRACTS":
      break;
    case "FIRST_RECRUITMENT_DISCOUNT":
      break;
    case Hobby.OUTDOOR:
      return Icons.Outdoor;
    case Hobby.MUSIC:
      return Icons.Music;
    case Hobby.BOARDGAMES:
      return Icons.Boardgames;
    case Hobby.ALL:
      break;
    case TaskCompletion:
      return Icons.Check;
  }
  return null;
}

export default Icon;
