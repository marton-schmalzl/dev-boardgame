import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const skillBarVariants = cva(
    "flex gap-[2px] h-[10px] w-full",
    {
        variants: {
            variant: {
                feature: "",
                tech: "",
                item: "",
                employee: "",
                backoffice: "",
            },
        },
        defaultVariants: {
            variant: "feature",
        }
    }
);

const pipVariants = cva(
    "h-full w-full rounded-[1px]",
    {
        variants: {
            variant: {
                feature: "bg-feature-border data-[filled=true]:bg-feature-text",
                tech: "bg-tech-border data-[filled=true]:bg-tech-text",
                item: "bg-item-border data-[filled=true]:bg-item-text",
                employee: "bg-employee-border data-[filled=true]:bg-employee-text",
                backoffice: "bg-backoffice-border data-[filled=true]:bg-backoffice-text",
            },
        },
        defaultVariants: {
            variant: "feature",
        }
    }
);

interface SkillBarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skillBarVariants> {
    level: number;
    maxLevel?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ level, maxLevel = 7, variant, className, ...props }) => {
    return (
        <div className={cn(skillBarVariants({ variant, className }))} {...props}>
            {Array.from({ length: maxLevel }, (_, idx) => (
                <div
                    key={idx}
                    className={cn(pipVariants({ variant }))}
                    data-filled={idx < level}
                />
            ))}
        </div>
    );
};

export default SkillBar;
