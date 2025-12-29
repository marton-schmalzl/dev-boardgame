import React from 'react';
import styles from './CostDisplay.module.css';

interface CostDisplayProps {
    cost: number;
    className?: string; // Allow overrides or positioning classes
}

const CostDisplay: React.FC<CostDisplayProps> = ({ cost, className }) => {
    return (
        <div className={`${styles.costDisplay} ${className || ''}`}>
            ${cost}
        </div>
    );
};

export default CostDisplay;
