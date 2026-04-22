type Props = {
  items: string[];
  className?: string;
  accent?: "blue" | "red" | "orange" | "green" | "yellow";
};

const accents: Record<NonNullable<Props["accent"]>, string> = {
  blue: "text-brand-blue",
  red: "text-brand-red",
  orange: "text-brand-orange",
  green: "text-brand-green",
  yellow: "text-brand-yellow",
};

export default function Marquee({ items, className = "", accent = "red" }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden border-y-2 border-foreground bg-background py-6 ${className}`}>
      <div className="marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-3xl md:text-5xl font-bold tracking-tight whitespace-nowrap"
          >
            {item}
            <span className={`${accents[accent]} text-2xl`}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
