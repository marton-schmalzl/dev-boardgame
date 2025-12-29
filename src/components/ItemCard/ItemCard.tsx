import React from 'react';
import { Item } from '../../model/cards/Item';
import { Stats } from '../../model/Stats';
import styles from './ItemCard.module.css';
import CostDisplay from '../common/CostDisplay';

interface ItemCardProps {
  item: Item;
}

const skillIcons: { [key in keyof Stats]: string } = {
  knowledge: '⚙️',
  organization: '📋',
  creativity: '💡',
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const renderSkillBar = (level: number) => (
    <div className={styles.skillBar}>
      {Array.from({ length: 7 }, (_, idx) => (
        <div key={idx} className={idx < level ? styles.filled : ''}></div>
      ))}
    </div>
  );

  return (
    <div className={styles.card}>
      {/* Header with Item Title and Cost */}
      <div className={styles.cardHeader}>
        <div className={styles.jobTitle}>{item.name?.en}</div>
        <CostDisplay cost={item.cost} />
      </div>

      {/* Content Section without the Name */}
      <div className={styles.content}>
        <div className={styles.infoLeft}>
          {/* Background Information -> RENAME to Description */}
          <div className={`${styles.outlinedBox} ${styles.backgroundBox}`}>
            <label htmlFor="description">Description</label>
            <div className={styles.personalInfo}>
              <div className={styles.flavorText}>{item.flavorText?.en}</div>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className={styles.photo}>
          <img
            src={"images/items/" + item.photoSrc}
            alt={'Item'}
          />
        </div>
      </div>

      {/* Description -> RENAME to Abilities */}
      <div className={`${styles.outlinedBox} ${styles.descriptionBox}`}>
        <label htmlFor="abilities">Abilities</label>
        <div className={styles.description}>{item.text?.en}</div>
      </div>

      {/* Skills */}
      {(Object.entries(item.skills).filter(([_, level]) => (level as number) > 0)).length > 0 &&
        <div className={`${styles.outlinedBox} ${styles.skillContainer}`}>
          <label>Skills</label>
          <div className={styles.skills}>
            {Object.entries(item.skills).filter(([_, level]) => (level as number) > 0).map(([skillName, level]) => (
              <div className={styles.skillCategory} key={skillName}>
                <div className={styles.skillIconContainer}>
                  <span className={styles.skillIcon}>
                    {skillIcons[skillName as keyof Stats]}
                  </span>
                </div>
                {renderSkillBar(level as number)}
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default ItemCard;