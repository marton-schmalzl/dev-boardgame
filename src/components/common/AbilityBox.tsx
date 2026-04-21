import React, { ReactNode } from 'react';
import OutlinedBox from '../ui/OutlinedBox';

interface AbilityBoxProps {
    text?: ReactNode;
    variant: "item" | "employee" | "backoffice";
    className?: string; // Added className to props for flexibility
}

const AbilityBox: React.FC<AbilityBoxProps> = ({ text, variant, className }) => {
    return (
        <div className={`w-full flex-grow min-h-0 ${className || ''}`}>
            <OutlinedBox label="Abilities" variant={variant} className="h-full">
                <div className="text-sm text-slate-800">
                    {text}
                </div>
            </OutlinedBox>
        </div>
    );
};

export default AbilityBox;
