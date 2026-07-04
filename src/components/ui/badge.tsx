import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border border-border bg-foreground/[0.04] text-muted-foreground font-mono text-[11px] uppercase tracking-widest px-2 py-0.5 rounded-sm transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-foreground/[0.04] text-muted-foreground",
        primary: "border-primary/20 bg-primary/10 text-primary",
        outline: "border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
