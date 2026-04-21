import React, { PropsWithChildren } from 'react';
import { Card } from '../ui/Card';

interface GameCardProps extends PropsWithChildren {
    variant: "item" | "employee" | "backoffice";
    className?: string;
}

export const GameCard: React.FC<GameCardProps> = ({
    variant,
    className,
    children,
}) => {
    return (
        <Card variant={variant} orientation="portrait" layout="flex" className={`h-full justify-between ${className || ''}`}>
            {children}
        </Card>
    );
};
