import React from 'react';
import styles from './BackOfficeEmployeeCard.module.css';
import { Person } from '../../model/cards/Person';
import classNames from 'classnames';
import OutlinedBox from '../common/OutlinedBox';
import CardHeader from '../common/CardHeader';
import CostDisplay from '../common/CostDisplay';

interface BackOfficeEmployeeCardProps {
  employee: Person
}

const BackOfficeEmployeeCard: React.FC<BackOfficeEmployeeCardProps> = ({ employee }) => {
  return (
    <div className={styles.card}>
      <CardHeader
        left={<div className={styles.jobTitle}>{employee.title?.en}</div>}
        right={<CostDisplay cost={employee.cost} />}
      />

      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles.infoLeft}>
          {/* Description (Merged Name & Background) */}
          <OutlinedBox
            label="Description"
            className={classNames(styles.outlinedBox, styles.backgroundBox)}
          >
            <div className={styles.personalInfo}>
              <div className={styles.name}>{employee.name?.en}</div>
              <div className={styles.flavorText}>{employee.flavorText?.en}</div>
            </div>
          </OutlinedBox>
        </div>

        {/* Photo */}
        <div className={styles.photo}>
          <img
            src={"images/backoffice/" + employee.photoSrc}
            alt={'Employee Headshot'}
          />
        </div>
      </div>

      {/* Abilities (Formerly Description) */}
      <OutlinedBox
        label="Abilities"
        className={classNames(styles.outlinedBox, styles.descriptionBox)}
      >
        <div className={styles.description}>{employee.text?.en}</div>
      </OutlinedBox>

      {/* No Skills Section */}
    </div>
  );
};

export default BackOfficeEmployeeCard;
