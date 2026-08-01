import { StarIcon } from "./icons";

interface MarqueeProps {
  words: string[];
  dark?: boolean;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({ words, dark = true, reverse = false, className = "" }: MarqueeProps) {
  const row = (
    <div className="flex shrink-0 items-center">
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-lg font-bold uppercase tracking-[0.14em] sm:text-2xl">
            {w}
          </span>
          <StarIcon className={`h-4 w-4 shrink-0 ${dark ? "text-flame" : "text-cobalt"}`} />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee overflow-hidden border-y-2 border-ink py-4 ${
        dark ? "bg-ink text-paper" : "bg-paper text-ink"
      } ${className}`}
    >
      <div className={`marquee-track flex w-max ${reverse ? "reverse" : ""}`}>
        {row}
        {row}
      </div>
    </div>
  );
}
