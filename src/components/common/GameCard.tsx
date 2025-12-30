import React from 'react';
import { Stats } from '../../model/Stats';
import CostDisplay from '../common/CostDisplay';
import { Card } from '../ui/Card';
import OutlinedBox from '../ui/OutlinedBox';
import CardHeader from '../common/CardHeader';
import SkillBar from '../common/SkillBar';

interface GameCardProps {
    variant: "item" | "employee" | "backoffice";
    title?: string;
    name?: string;
    cost?: number;
    flavorText?: string;
    text?: string;
    photoSrc?: string;
    imageFolder: string;
    skills?: Stats;
    filterSkills?: boolean;
}

const skillIcons: { [key in keyof Stats]: string } = {
    knowledge: '⚙️',
    organization: '📋',
    creativity: '💡',
};

export const GameCard: React.FC<GameCardProps> = ({
    variant,
    title,
    name,
    cost,
    flavorText,
    text,
    photoSrc,
    imageFolder,
    skills,
    filterSkills = false,
}) => {

    // Process skills: filter if requested, otherwise show all
    const skillsToShow = skills
        ? Object.entries(skills).filter(([_, level]) => filterSkills ? ((level as number) || 0) > 0 : true)
        : [];

    return (
        <Card variant={variant} orientation="portrait" layout="flex" className="h-full justify-between">
            {/* Header */}
            <div className="w-full">
                <CardHeader
                    left={title && (
                        <div className="text-lg font-bold leading-tight truncate" style={{ color: `var(--color-${variant}-text)` }}>
                            {title}
                        </div>
                    )}
                    right={<CostDisplay cost={cost || 0} />}
                />
            </div>

            {/* Main Content: Flavor & Photo */}
            <div className="grid grid-cols-2 gap-2 flex-shrink-0">
                {/* Flavor Text */}
                <div className="min-w-0 h-full">
                    <OutlinedBox label="Description" variant={variant} className="h-full">
                        <div className="mb-2">
                            <div className="text-sm font-bold opacity-80 leading-tight" style={{ color: `var(--color-${variant}-text)` }}>
                                {name}
                            </div>
                        </div>
                        <div className="text-[10px] italic text-slate-800">
                            {flavorText}
                        </div>
                    </OutlinedBox>
                </div>

                {/* Photo */}
                <div className={`w-full aspect-square rounded-[5px] overflow-hidden border border-${variant}-border bg-white flex items-center justify-center`}>
                    {photoSrc && (
                        <img
                            src={`${imageFolder}/${photoSrc}`}
                            alt={variant}
                            className="w-full h-full object-contain block"
                        />
                    )}
                </div>
            </div>

            {/* Abilities */}
            <div className="w-full flex-grow min-h-0">
                <OutlinedBox label="Abilities" variant={variant} className="h-full">
                    <div className="text-sm text-slate-800">
                        {text}
                    </div>
                </OutlinedBox>
            </div>

            {/* Skills */}
            {skillsToShow.length > 0 && (
                <div className="w-full">
                    <OutlinedBox label="Skills" variant={variant} className="justify-center">
                        <div className="flex flex-col gap-0 w-full">
                            {skillsToShow.map(([skillName, level]) => (
                                <div className="flex items-center gap-2 w-full" key={skillName}>
                                    <div className="w-[20px] text-center text-xs">
                                        {skillIcons[skillName as keyof Stats]}
                                    </div>
                                    <div className="flex-grow">
                                        <SkillBar level={(level as number) || 0} maxLevel={7} variant={variant} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </OutlinedBox>
                </div>
            )}
        </Card>
    );
};
