import React from 'react';
import styles from './OutlinedBox.module.css';
import classNames from 'classnames';

interface OutlinedBoxProps {
    label: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const OutlinedBox: React.FC<OutlinedBoxProps> = ({ label, children, className, style }) => {
    return (
        <div className={classNames(styles.outlinedBox, className)} style={style}>
            <label className={styles.label}>{label}</label>
            {children}
        </div>
    );
};

export default OutlinedBox;
