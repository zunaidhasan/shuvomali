import { ArrowDownRight, Cake, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { useCountUp, useInView } from "../hooks/useReveal";
import { StarIcon } from "./icons";

function SpinBadge() {
  return (
    <div className="absolute -right-6 -top-8 z-20 hidden h-28 w-28 sm:block lg:-right-10 lg:h-32 lg:w-32">
      <svg viewBox="0 0 100 100" className="spin-slow h-full w-full">
        <defs>
          <path id="circ" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <circle cx="50" cy="50" r="49" className="fill-ink" />
        <text className="fill-paper" style={{ fontSize: "8.2px", letterSpacing: "1.6px", fontWeight: 700 }}>
          <textPath href="#circ">RAHUL ROY SHUVO • DHAKA • PIROJPUR •</textPath>
        </text>
      </svg>
      <StarIcon className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-flame" />
    </div>
  );
}

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const count = useCountUp(profile.followers, inView);

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      {/* ambient dot grid and mesh gradient */}
      <div className="mesh-gradient absolute inset-0 opacity-[0.03] blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(16,18,22,0.14) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* oversized watermark */}
      <div className="pointer-events-none absolute -bottom-10 left-0 select-none font-display text-[26vw] font-extrabold leading-none text-ink/[0.04]">
        1999
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 lg:grid-cols-12 lg:items-center">
        {/* Left — name */}
        <div className="lg:col-span-7">
          <div className="reveal mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink/60">
            <span className="bg-ink px-3 py-1 text-paper">Personal Site</span>
            <span>Est. 1999 · Bangladesh</span>
          </div>

          <h1 className="reveal font-display font-extrabold uppercase leading-[0.86] tracking-tight" style={{ ["--reveal-delay" as string]: "80ms" }}>
            <span className="block text-[clamp(3.2rem,10vw,8.5rem)] text-glow">Rahul</span>
            <span className="text-outline block text-[clamp(3.2rem,10vw,8.5rem)] text-glow">Roy</span>
            <span className="block text-[clamp(3.2rem,10vw,8.5rem)] text-cobalt text-glow-cobalt">
              Shuvo<span className="text-flame">.</span>
            </span>
          </h1>

          <p className="reveal mt-8 max-w-lg text-lg leading-relaxed text-ink/70" style={{ ["--reveal-delay" as string]: "160ms" }}>
            {profile.bio}
          </p>

          <div className="reveal mt-6 flex flex-wrap gap-3 text-sm font-medium" style={{ ["--reveal-delay" as string]: "220ms" }}>
            <span className="glass-panel glass-card-hover flex items-center gap-2 px-4 py-2">
              <MapPin className="h-4 w-4 text-cobalt" /> {profile.lives}
            </span>
            <span className="glass-panel glass-card-hover flex items-center gap-2 px-4 py-2">
              <Cake className="h-4 w-4 text-flame" /> {profile.born}
            </span>
          </div>

          <div className="reveal mt-10 flex flex-wrap items-center gap-5" style={{ ["--reveal-delay" as string]: "280ms" }}>
            <a
              href="#gallery"
              className="group flex items-center gap-2 bg-ink px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-paper transition hover:bg-cobalt"
            >
              Enter the frames
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#connect"
              className="link-sweep text-sm font-bold uppercase tracking-[0.14em]"
            >
              Say hello
            </a>
          </div>

          <div ref={ref} className="reveal mt-12 flex items-end gap-3" style={{ ["--reveal-delay" as string]: "340ms" }}>
            <span className="font-display text-5xl font-extrabold tabular-nums text-ink sm:text-6xl">
              {count.toLocaleString()}
            </span>
            <span className="pb-1.5 text-sm font-semibold uppercase tracking-[0.16em] text-ink/60">
              followers
              <br />
              &amp; counting
            </span>
          </div>
        </div>

        {/* Right — photo collage */}
        <div className="relative lg:col-span-5">
          <div className="reveal relative mx-auto max-w-sm" style={{ ["--reveal-delay" as string]: "200ms" }}>
            <SpinBadge />
            <div className="glass-panel glass-card-hover relative rotate-2 p-2 shadow-[0_20px_40px_rgba(34,66,255,0.2)] transition-transform duration-500 hover:rotate-0 hover:z-10">
              <img
                src="/images/gallery/1785534220900-image.png"
                alt="Rahul Roy Shuvo on a rooftop"
                className="aspect-[4/5] w-full object-cover rounded-sm"
              />
              <div className="flex items-center justify-between px-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/80">
                <span>Fig. 01 — Rooftop</span>
                <span>Dhaka</span>
              </div>
            </div>

            <div
              className="float-y glass-panel glass-card-hover absolute -bottom-10 -left-10 w-36 p-1.5 shadow-[0_20px_40px_rgba(255,75,31,0.2)] sm:w-44 z-20"
              style={{ ["--tilt" as string]: "-5deg" }}
            >
              <img
                src="/images/gallery/1785534217199-image.png"
                alt="Rahul with his cat"
                className="aspect-square w-full object-cover rounded-sm"
              />
            </div>

            <div className="absolute -left-6 top-8 hidden rotate-[-8deg] bg-flame px-3 py-1.5 font-display text-xs font-bold uppercase tracking-[0.14em] text-paper sm:block">
              100% Desi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
