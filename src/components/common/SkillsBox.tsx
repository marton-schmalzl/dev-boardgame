import React from 'react';
import { Stats } from '../../model/Stats';
import OutlinedBox from '../ui/OutlinedBox';
import { Icons } from '../../icons';
import SkillRow from './SkillRow';

interface SkillsBoxProps {
    skills?: Stats;
    variant: "item" | "employee" | "backoffice";
    className?: string;
}

const skillIcons: { [key in keyof Stats]: React.ElementType } = {
    knowledge: Icons.Knowledge,
    organization: Icons.Organization,
    creativity: Icons.Creativity,
};

const SkillsBox: React.FC<SkillsBoxProps> = ({ skills, variant, className }) => {
    // Show all skills provided in the props
    const skillsToShow = skills
        ? Object.entries(skills)
        : [];

    if (skillsToShow.length === 0) {
        return null;
    }

    return (
        <div className={`w-full ${className || ''}`}>
            <OutlinedBox label="Skills" variant={variant} className="justify-center">
                <div className="flex flex-col gap-0 w-full">
                    {skillsToShow.map(([skillName, level]) => (
                        <SkillRow
                            key={skillName}
                            skillName={skillName}
                            level={(level as number) || 0}
                            icon={skillIcons[skillName as keyof Stats]}
                            variant={variant}
                        />
                    ))}
                </div>
            </OutlinedBox>
        </div>
    );
};



export default SkillsBox;
