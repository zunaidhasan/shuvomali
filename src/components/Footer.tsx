import { ArrowUp, Heart } from "lucide-react";
import { profile } from "../data/profile";
import { FacebookIcon, InstagramIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-ink bg-ink text-paper">
      {/* Giant name strip */}
      <div className="marquee overflow-hidden border-b border-paper/10 py-6">
        <div className="marquee-track reverse flex w-max">
          {[0, 1].map((k) => (
            <span
              key={k}
              className="whitespace-nowrap px-4 font-display text-6xl font-extrabold uppercase tracking-tight text-paper/10 sm:text-8xl"
            >
              Rahul Roy Shuvo ✦ Rahul Roy Shuvo ✦
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row">
        <p className="flex items-center gap-1.5 text-sm text-paper/60">
          © {new Date().getFullYear()} {profile.name} · Made with
          <Heart className="h-3.5 w-3.5 fill-flame text-flame" /> in Dhaka
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center border border-paper/25 text-paper/70 transition hover:border-cobalt hover:bg-cobalt hover:text-paper"
          >
            <FacebookIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center border border-paper/25 text-paper/70 transition hover:border-flame hover:bg-flame hover:text-paper"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-2 flex items-center gap-2 border border-paper/25 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-paper/70 transition hover:border-paper hover:text-paper"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
