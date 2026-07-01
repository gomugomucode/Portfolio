interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  isLast?: boolean;
}

export const TimelineItem = ({
  date,
  title,
  subtitle,
  description,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className={`relative border-l border-border ml-3 pl-6 ${isLast ? "pb-0" : "pb-10"}`}>
      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border border-border bg-background" />

      <div className="flex flex-col gap-1.5">
        <span className="label-mono">{date}</span>
        <h3 className="font-display text-lg font-medium text-foreground leading-snug">{title}</h3>
        {subtitle && <span className="text-sm text-muted-foreground">{subtitle}</span>}
        <p className="text-body-sm mt-1">{description}</p>
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
