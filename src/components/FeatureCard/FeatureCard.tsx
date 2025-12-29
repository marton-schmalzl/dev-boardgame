import React from 'react';
import styles from './FeatureCard.module.css';
import { Stats } from '../../model/Stats';
import { Feature } from '../../model/contracts/Contract';
import OutlinedBox from '../common/OutlinedBox';
import CardHeader from '../common/CardHeader';
import SkillBar from '../common/SkillBar';
import classNames from 'classnames';

interface FeatureCardProps {
  feature: Feature;
}

const skillIcons: { [key in keyof Stats]: string } = {
  knowledge: '⚙️',
  organization: '📋',
  creativity: '💡',
};

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className={styles.card}>
      {/* Row 1: Header (Spans 2 Columns) */}
      <div className={styles.headerRow}>
        <CardHeader
          left={<div className={styles.storyPoints}>{feature.storyPoints}</div>}
          center={<div className={styles.featureName}>{feature.name.en}</div>}
        />
      </div>

      {/* Row 2 Left: Effect */}
      <div className={styles.topLeft}>
        <OutlinedBox
          label="Effect"
          className={classNames(styles.outlinedBox, styles.effectBox)}
        >
          <div className={styles.descriptionText}>
            {feature.effectDescription?.en}
          </div>
        </OutlinedBox>
      </div>

      {/* Row 2 Right: Image */}
      <div className={styles.topRight}>
        <img
          src={'images/features/' + feature.photoSrc}
          alt={'Feature Illustration'}
        />
      </div>

      {/* Row 3 Left: Flavor Text */}
      <div className={styles.bottomLeft}>
        <OutlinedBox
          label="Flavor Text"
          className={classNames(styles.outlinedBox, styles.flavorBox)}
        >
          <div className={styles.flavorText}>
            {feature.flavorText?.en || ''}
          </div>
        </OutlinedBox>
      </div>

      {/* Row 3 Right: Required Skills */}
      <div className={styles.bottomRight}>
        <div className={styles.skillContainer}>
          <label className={styles.skillContainerLabel}>Required Skills</label>
          <div className={styles.skills}>
            {Object.entries(feature.requiredSkills).map(([skillName, level]) => (
              <div className={styles.skillCategory} key={skillName}>
                <div className={styles.skillIconContainer}>
                  <span className={styles.skillIcon}>
                    {skillIcons[skillName as keyof Stats]}
                  </span>
                </div>
                <SkillBar
                  level={level as number}
                  maxLevel={10}
                  filledColor="#546e7a"
                  emptyColor="#b0bec5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
