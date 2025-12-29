import React from 'react';
import styles from './CardHeader.module.css';
import classNames from 'classnames';

interface CardHeaderProps {
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
    className?: string;
    // Backward compatibility or convenience helpers could be added, but manual refactor preferred.
}

const CardHeader: React.FC<CardHeaderProps> = ({
    left,
    center,
    right,
    className
}) => {
    return (
        <div className={classNames(styles.cardHeader, className)}>
            <div className={styles.leftSection}>{left}</div>
            <div className={styles.centerSection}>{center}</div>
            <div className={styles.rightSection}>{right}</div>
        </div>
    );
};

export default CardHeader;
