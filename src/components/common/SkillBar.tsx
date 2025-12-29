import React from 'react';
import styles from './SkillBar.module.css';
import classNames from 'classnames';

interface SkillBarProps {
    level: number;
    maxLevel?: number;
    filledColor?: string; // Optional override
    emptyColor?: string; // Optional override
    className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({
    level,
    maxLevel = 7,
    filledColor,
    emptyColor,
    className
}) => {
    return (
        <div className={classNames(styles.skillBar, className)}>
            {Array.from({ length: maxLevel }, (_, idx) => {
                const isFilled = idx < level;
                return (
                    <div
                        key={idx}
                        className={classNames(styles.pip, { [styles.filled]: isFilled })}
                        style={{
                            backgroundColor: isFilled ? filledColor : emptyColor
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default SkillBar;
