import React from 'react';
import { cn } from '../../lib/utils';

interface CardHeaderProps {
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
    className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({
    left,
    center,
    right,
    className
}) => {
    return (
        <div className={cn("flex justify-between items-center mb-[5px] w-full", className)}>
            <div className="flex justify-start w-auto min-w-0">{left}</div>
            <div className="flex justify-center flex-1 text-center min-w-0">{center}</div>
            <div className="flex justify-end w-auto">{right}</div>
        </div>
    );
};

export default CardHeader;
