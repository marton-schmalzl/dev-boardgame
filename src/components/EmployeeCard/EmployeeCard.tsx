import React from 'react';
import styles from './EmployeeCard.module.css';
import { Programmer } from '../../model/cards/Person';
import { Stats } from '../../model/Stats';
import classNames from 'classnames';
import OutlinedBox from '../common/OutlinedBox';
import CostDisplay from '../common/CostDisplay';
import CardHeader from '../common/CardHeader';
import SkillBar from '../common/SkillBar';

interface EmployeeCardProps {
    employee: Programmer;
}

const skillIcons: { [key in keyof Stats]: string } = {
    knowledge: '⚙️',
    organization: '📋',
    creativity: '💡',
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
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
                            <div className={styles.flavorText}>
                                {employee.flavorText?.en}
                            </div>
                        </div>
                    </OutlinedBox>
                </div>

                {/* Photo */}
                <div className={styles.photo}>
                    <img
                        src={'images/product_team/' + employee.photoSrc}
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

            {/* Skills */}
            <OutlinedBox
                label="Skills"
                className={classNames(styles.outlinedBox, styles.skillContainer)}
            >
                <div className={styles.skills}>
                    {Object.entries(employee.skills).map(([skillName, level]) => (
                        <div className={styles.skillCategory} key={skillName}>
                            <div className={styles.skillIconContainer}>
                                <span className={styles.skillIcon}>
                                    {skillIcons[skillName as keyof Stats]}
                                </span>
                            </div>
                            <SkillBar level={level as number} />
                        </div>
                    ))}
                </div>
            </OutlinedBox>
        </div>
    );
};

export default EmployeeCard;
