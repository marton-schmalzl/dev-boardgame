import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const outlinedBoxVariants = cva(
    "relative border rounded-[5px] p-2 pt-3 flex flex-col box-border",
    {
        variants: {
            variant: {
                feature: "bg-feature-soft border-feature-border",
                tech: "bg-tech-soft border-tech-border",
                item: "bg-item-soft border-item-border",
                employee: "bg-employee-soft border-employee-border",
                backoffice: "bg-backoffice-soft border-backoffice-border",
            },
        },
        defaultVariants: {
            variant: "feature",
        }
    }
);

const labelVariants = cva(
    "absolute h-[8px] top-[-8px] left-[10px] px-[4px] text-[10px] font-bold uppercase tracking-wider rounded-t-[4px] rounded-b-0 border border-b-0",
    {
        variants: {
            variant: {
                feature: "bg-feature-soft border-feature-border text-feature-text",
                tech: "bg-tech-soft border-tech-border text-tech-text",
                item: "bg-item-soft border-item-border text-item-text",
                employee: "bg-employee-soft border-employee-border text-employee-text",
                backoffice: "bg-backoffice-soft border-backoffice-border text-backoffice-text",
            },
        },
        defaultVariants: {
            variant: "feature",
        }
    }
);

interface OutlinedBoxProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof outlinedBoxVariants> {
    label: string;
}

const OutlinedBox: React.FC<OutlinedBoxProps> = ({ label, className, variant, children, ...props }) => {
    return (
        <div className={cn(outlinedBoxVariants({ variant, className }))} {...props}>
            <span className={cn(labelVariants({ variant }))}>
                {label}
            </span>
            {children}
        </div>
    );
};

export default OutlinedBox;
