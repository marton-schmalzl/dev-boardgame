import React from 'react';
import styles from './TechnologyCard.module.css';
import { Stats } from '../../model/Stats';
import classNames from 'classnames';
import { Technology } from '../../model/contracts/Contract';
import CardHeader from '../common/CardHeader';

interface TechnologyCardProps {
  technology: Technology;
}

const skillIcons: { [key in keyof Stats]: string } = {
  knowledge: '⚙️',
  organization: '📋',
  creativity: '💡',
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {
  const renderSkillBar = (level: number) => (
    <div className={styles['skill-bar']}>
      {Array.from({ length: 10 }, (_, idx) => (
        <div
          key={idx}
          className={classNames({ [styles.filled]: idx < level })}
        ></div>
      ))}
    </div>
  );

  return (
    <div className={styles.card}>
      {/* Row 1: Header (Spans 2 Columns) */}
      <div className={styles.headerRow}>
        <CardHeader
          left={<div className={styles['story-points']}>{technology.storyPoints}</div>}
          center={<div className={styles['tech-name']}>{technology.name.en}</div>}
          right={
            technology.openSourcePrestige ? (
              <div className={styles.prestige}>
                <span role="img" aria-label="Open Source Prestige">
                  🌐
                </span>{' '}
                {technology.openSourcePrestige}
              </div>
            ) : null
          }
        />
      </div>

      {/* Row 2 Left: Top Effect */}
      <div className={styles.topLeft}>
        <div className={styles['description-box']}>
          <label>Top Effect</label>
          <div className={styles['description-text']}>
            {technology.topDescription?.en || ''}
          </div>
        </div>
      </div>

      {/* Row 2 Right: Image */}
      <div className={styles['topRight']}>
        <img
          src={'images/technology/' + technology.photoSrc}
          alt={'Technology Illustration'}
        />
      </div>

      {/* Row 3 Left: Bottom Effect */}
      <div className={styles['bottomLeft']}>
        <div className={styles['description-box']}>
          <label>Bottom Effect</label>
          <div className={styles['description-text']}>
            {technology.bottomDescription?.en || ''}
          </div>
        </div>
      </div>

      {/* Row 3 Right: Skills */}
      <div className={styles['bottomRight']}>
        <div className={styles['skill-container']}>
          <label>Required Skills</label>
          <div className={styles.skills}>
            {Object.entries(technology.requiredSkills).map(
              ([skillName, level]) => (
                <div className={styles['skill-category']} key={skillName}>
                  <div className={styles['skill-icon-container']}>
                    <span className={styles['skill-icon']}>
                      {skillIcons[skillName as keyof Stats]}
                    </span>
                  </div>
                  {renderSkillBar(level)}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
