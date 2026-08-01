import { Cake, Heart, Home, Languages, MapPin, Users } from "lucide-react";
import { profile } from "../data/profile";

const facts = [
  { icon: MapPin, label: "Lives in", value: profile.lives },
  { icon: Home, label: "Originally from", value: profile.from },
  { icon: Cake, label: "Born", value: profile.born },
  { icon: Heart, label: "Relationship", value: profile.relationship },
  { icon: Languages, label: "Speaks", value: profile.languages.join(" · ") },
  { icon: Users, label: "Part of", value: profile.communities.join(" · ") },
];

export default function About() {
  return (
    <section id="about" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="reveal mb-14 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-cobalt">(01)</span>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.28em]">The Details</h2>
          <span className="h-px flex-1 bg-ink/20" />
        </div>

        <div className="grid gap-14 lg:grid-cols-12">
          {/* Statement */}
          <div className="lg:col-span-5">
            <h3 className="reveal font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Small-town roots,
              <br />
              <span className="text-cobalt">big-city</span> rhythm.
            </h3>
            <p className="reveal mt-6 max-w-md leading-relaxed text-ink/70" style={{ ["--reveal-delay" as string]: "100ms" }}>
              Born in Pirojpur, raised on its quiet riverside pace, now living the loud,
              fast, colorful life of Mirpur, Dhaka. Student by schedule, storyteller by
              instinct — always dressed for the part.
            </p>
            <div className="reveal mt-8 inline-block -rotate-2 glass-panel glass-card-hover px-6 py-4 shadow-[0_12px_24px_rgba(255,75,31,0.15)]" style={{ ["--reveal-delay" as string]: "180ms" }}>
              <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-glow-flame">
                “Dress how you want to be addressed.”
              </p>
            </div>
          </div>

          {/* Facts list */}
          <div className="lg:col-span-7">
            <dl>
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className="reveal group flex items-center gap-5 glass-panel glass-card-hover p-4 mb-4 rounded-lg"
                  style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper shadow-inner transition-colors group-hover:bg-cobalt group-hover:text-paper group-hover:shadow-[0_0_15px_rgba(34,66,255,0.5)]">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <dt className="w-36 shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-ink/60 group-hover:text-ink/80 transition-colors">
                    {f.label}
                  </dt>
                  <dd className="font-medium text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
