import { GraduationCap } from "lucide-react";
import { education } from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      {/* ambient glow lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #f1f0ea 0, #f1f0ea 1px, transparent 1px, transparent 120px)",
        }}
      />
      <div className="pointer-events-none absolute -right-16 top-10 select-none font-display text-[18rem] font-extrabold leading-none text-paper/[0.03]">
        EDU
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-flame">(02)</span>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.28em]">The Journey</h2>
          <span className="h-px flex-1 bg-paper/20" />
        </div>

        <div className="mb-12 max-w-2xl">
          <h3 className="reveal font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
            From Pirojpur
            <br />
            to the <span className="text-flame">big stage.</span>
          </h3>
        </div>

        <div>
          {education.map((e, i) => (
            <div
              key={e.id}
              className="reveal group grid gap-4 glass-panel-dark glass-card-hover p-6 mb-4 rounded-lg md:grid-cols-12 md:items-center md:gap-8"
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            >
              <span className="font-display text-5xl font-extrabold text-paper/20 transition-all duration-300 group-hover:text-flame group-hover:text-glow-flame md:col-span-2 md:text-7xl">
                {e.id}
              </span>
              <div className="md:col-span-6">
                <h4 className="font-display text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                  {e.school}
                </h4>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/60">{e.note}</p>
              </div>
              <div className="flex items-center gap-3 md:col-span-4 md:justify-end">
                <span className="flex items-center gap-1.5 border border-paper/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]">
                  <GraduationCap className="h-3.5 w-3.5 text-flame" /> {e.level}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/50">
                  {e.place}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
