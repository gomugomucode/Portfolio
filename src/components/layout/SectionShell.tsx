import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Show top border divider between sections */
  bordered?: boolean;
}

export const SectionShell = ({
  id,
  children,
  className,
  bordered = true,
}: SectionShellProps) => (
  <section
    id={id}
    className={cn(
      "w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12",
      "py-20 md:py-28 lg:py-32",
      bordered && "border-t border-border",
      className,
    )}
  >
    {children}
  </section>
);

interface SectionHeaderProps {
  index: string;
  title: ReactNode;
  description?: string;
  className?: string;
}

export const SectionHeader = ({
  index,
  title,
  description,
  className,
}: SectionHeaderProps) => (
  <div className={cn("flex flex-col gap-3 mb-12 md:mb-16", className)}>
    <span className="label-mono">{index}</span>
    <h2 className="heading-display">{title}</h2>
    {description && (
      <p className="text-body-sm max-w-xl">{description}</p>
    )}
  </div>
);

interface SectionGridProps {
  children: ReactNode;
  className?: string;
}

export const SectionGrid = ({ children, className }: SectionGridProps) => (
  <div
    className={cn(
      "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start",
      className,
    )}
  >
    {children}
  </div>
);
