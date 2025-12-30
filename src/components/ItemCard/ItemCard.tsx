import React from 'react';
import { Item } from '../../model/cards/Item';
import { GameCard } from '../common/GameCard';

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <GameCard
      variant="item"
      title={item.name?.en} // Move name to Title (Header)
      cost={item.cost}
      flavorText={item.flavorText?.en}
      text={item.text?.en}
      photoSrc={item.photoSrc}
      imageFolder="images/items"
      skills={item.skills}
      filterSkills={true} // Item cards filter skills > 0
    />
  );
};

export default ItemCard;