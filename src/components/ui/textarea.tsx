import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-subtle-foreground transition-colors rounded-none focus:outline-none focus:border-foreground interactive-focus disabled:cursor-not-allowed disabled:opacity-50 text-base md:text-sm resize-none",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
