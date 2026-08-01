import { ArrowUpRight, AtSign } from "lucide-react";
import { profile } from "../data/profile";
import { FacebookIcon, InstagramIcon, StarIcon } from "./icons";

export default function Connect() {
  return (
    <section id="connect" className="relative overflow-hidden mesh-gradient py-24 text-paper md:py-32">
      <StarIcon className="pointer-events-none absolute left-8 top-10 h-10 w-10 text-paper/20" />
      <StarIcon className="pointer-events-none absolute bottom-12 right-10 h-16 w-16 text-paper/15" />
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#f1f0ea 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-paper/70">(04)</span>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.28em]">Connect</h2>
          <span className="h-px flex-1 bg-paper/25" />
        </div>

        <h3 className="reveal max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
          Let's stay
          <br />
          in the <span className="text-flame drop-shadow-[3px_3px_0_#101216]">loop.</span>
        </h3>
        <p className="reveal mt-6 max-w-lg text-lg leading-relaxed text-paper/80" style={{ ["--reveal-delay" as string]: "100ms" }}>
          The door's always open — slide into the DMs, drop a follow, or just come see
          what's new this week.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Facebook */}
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group glass-panel glass-card-hover bg-paper/90 p-8 text-ink shadow-lg"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center bg-[#1877F2] text-paper">
                <FacebookIcon className="h-7 w-7" />
              </span>
              <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <h4 className="mt-8 font-display text-3xl font-extrabold uppercase tracking-tight">Facebook</h4>
            <p className="mt-2 break-all text-sm font-medium text-ink/60">
              facebook.com/rahulroyshuvo1111
            </p>
            <p className="mt-6 inline-block bg-ink px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-paper">
              Send a friend request
            </p>
          </a>

          {/* Instagram */}
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group glass-panel-dark glass-card-hover p-8 text-paper shadow-lg"
            style={{ ["--reveal-delay" as string]: "120ms" }}
          >
            <div className="flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center bg-gradient-to-tr from-flame via-[#e1306c] to-cobalt text-paper">
                <InstagramIcon className="h-6 w-6" />
              </span>
              <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <h4 className="mt-8 font-display text-3xl font-extrabold uppercase tracking-tight">Instagram</h4>
            <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-paper/60">
              <AtSign className="h-4 w-4" /> {profile.instagramHandle}
            </p>
            <p className="mt-6 inline-block bg-flame px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-paper">
              {profile.followers.toLocaleString()} followers strong
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
