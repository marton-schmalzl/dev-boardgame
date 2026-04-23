import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const cardVariants = cva(
    "relative border rounded-lg p-4 shadow-sm print:shadow-none print:break-inside-avoid gap-[10px] box-border font-mono text-slate-800",
    {
        variants: {
            variant: {
                feature: "bg-feature-gradient border-feature-border text-feature-text",
                tech: "bg-tech-gradient border-tech-border text-tech-text",
                item: "bg-item-gradient border-item-border text-item-text",
                employee: "bg-employee-gradient border-employee-border text-employee-text",
                backoffice: "bg-backoffice-gradient border-backoffice-border text-backoffice-text",
            },
            orientation: {
                landscape: "w-card-w h-card-h p-2 gap-1.5",
                portrait: "w-std-card-w h-std-card-h",
            },
            layout: {
                grid: "grid grid-rows-[auto_1fr_1fr] grid-cols-[1fr_auto]",
                flex: "flex flex-col",
            },
        },
        defaultVariants: {
            variant: "feature",
            orientation: "landscape",
            layout: "grid",
        }
    }
);

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> { }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, orientation, layout, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(cardVariants({ variant, orientation, layout, className }))}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card, cardVariants };
