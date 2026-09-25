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
      "w-full py-16 md:py-24 lg:py-28",
      bordered && "border-t border-border-soft",
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
  <div className={cn("flex flex-col gap-2 mb-10 md:mb-14", className)}>
    <div className="section-eyebrow">{index}</div>
    <HeadingTag className="heading-display">{title}</HeadingTag>
    {description && (
      <p className="text-body text-foreground/80 max-w-2xl">{description}</p>
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

