import React from 'react';
import { Item } from '../../model/cards/Item';
import { GameCard } from '../common/GameCard';
import CardHeader from '../common/CardHeader';
import CostDisplay from '../common/CostDisplay';
import OutlinedBox from '../ui/OutlinedBox';
import AbilityBox from '../common/AbilityBox';
import SkillsBox from '../common/SkillsBox';
import CardMetaBadges from '../common/CardMetaBadges';

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const variant = "item";
  const imageFolder = "images/items";

  return (
    <GameCard variant={variant}>
      <CardMetaBadges candidate={item.candidate} notes={item.notes} />
      {/* Header */}
      <div className="w-full">
        <CardHeader
          left={item.name?.en && (
            <div className="text-lg font-bold leading-tight truncate" style={{ color: `var(--color-${variant}-text)` }}>
              {item.name.en}
            </div>
          )}
          right={<CostDisplay cost={item.cost} />}
        />
      </div>

      {/* Main Content: Flavor & Photo */}
      <div className="grid grid-cols-2 gap-2 flex-shrink-0">
        {/* Flavor Text */}
        <div className="min-w-0 h-full">
          <OutlinedBox label="Description" variant={variant} className="h-full">
            {/* No name in description for ItemCard */}
            <div className="text-[10px] italic text-slate-800">
              {item.flavorText?.en}
            </div>
          </OutlinedBox>
        </div>

        {/* Photo */}
        <div className={`w-full aspect-square rounded-[5px] overflow-hidden border border-${variant}-border bg-white flex items-center justify-center`}>
          {item.photoSrc && (
            <img
              src={`${imageFolder}/${item.photoSrc}`}
              alt={variant}
              className="w-full h-full object-contain block"
            />
          )}
        </div>
      </div>

      {/* Abilities */}
      <AbilityBox text={item.text?.en} variant={variant} />

      {/* Skills */}
      {item.skills && (
        <SkillsBox
          skills={Object.fromEntries(Object.entries(item.skills).filter(([_, level]) => (level || 0) > 0))}
          variant={variant}
        />
      )}
    </GameCard>
  );
};

export default ItemCard;