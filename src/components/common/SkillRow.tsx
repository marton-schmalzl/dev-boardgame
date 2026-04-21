import React from 'react';
import SkillBar from './SkillBar';

interface SkillRowProps {
    skillName: string;
    level: number;
    icon?: React.ElementType; // Use ElementType for the component itself
    variant: "item" | "employee" | "backoffice" | "tech" | "feature";
    maxLevel?: number;
}

const SkillRow: React.FC<SkillRowProps> = ({ skillName, level, icon: IconComponent, variant, maxLevel = 7 }) => {
    return (
        <div className="flex items-center gap-2 w-full">
            <div className="w-[20px] flex justify-center text-xs">
                {IconComponent && <IconComponent size={14} />}
            </div>
            <div className="flex-grow">
                <SkillBar level={level} maxLevel={maxLevel} variant={variant} />
            </div>
        </div>
    );
};

export default SkillRow;
