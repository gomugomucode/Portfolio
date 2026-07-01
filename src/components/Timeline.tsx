import React from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  isLast?: boolean;
}

export const TimelineItem = ({ date, title, subtitle, description, isLast = false }: TimelineItemProps) => {
  return (
    <div className={`relative border-l border-border ml-3 pl-6 ${isLast ? "pb-0" : "pb-8"}`}>
      {/* Node indicator */}
      <div className="absolute -left-[6.5px] top-1.5 w-3 h-3 rounded-full border border-border bg-background" />
      
      {/* Content */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">{date}</span>
        <h3 className="font-display font-bold text-lg text-foreground leading-snug">{title}</h3>
        {subtitle && <span className="text-sm font-medium text-muted-foreground/80">{subtitle}</span>}
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

interface TimelineProps {
  items: Omit<TimelineItemProps, "isLast">[];
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="flex flex-col">
      {items.map((item, idx) => (
        <TimelineItem
          key={idx}
          date={item.date}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          isLast={idx === items.length - 1}
        />
      ))}
    </div>
  );
};
