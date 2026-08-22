import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

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
      "w-full py-20 md:py-28 lg:py-32",
      bordered && "border-t border-border",
      className,
    )}
  >
    <Container>
      {children}
    </Container>
  </section>
);

interface SectionHeaderProps {
  index: string;
  title: ReactNode;
  description?: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export const SectionHeader = ({
  index,
  title,
  description,
  className,
  as: HeadingTag = "h2",
}: SectionHeaderProps) => (
  <div className={cn("flex flex-col gap-3 mb-12 md:mb-16", className)}>
    <span className="label-mono">{index}</span>
    <HeadingTag className="heading-display">{title}</HeadingTag>
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

