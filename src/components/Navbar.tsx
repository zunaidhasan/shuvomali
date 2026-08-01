import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "./icons";
import { profile } from "../data/profile";

const links = [
  { href: "#about", label: "Details" },
  { href: "#education", label: "Journey" },
  { href: "#gallery", label: "Frames" },
  { href: "#connect", label: "Connect" },
];

function useDhakaTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const time = useDhakaTime();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility strip */}
      <div
        className={`hidden border-b border-ink/10 bg-ink text-paper transition-all duration-300 md:block ${
          scrolled ? "h-0 overflow-hidden border-0 opacity-0" : "h-9 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[11px] font-medium uppercase tracking-[0.18em]">
          <span className="flex items-center gap-2">
            <span className="blink inline-block h-1.5 w-1.5 rounded-full bg-flame" />
            Mirpur, Dhaka — {time} BST
          </span>
          <span className="flex items-center gap-5">
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition hover:text-flame"
            >
              <InstagramIcon className="h-3.5 w-3.5" /> @{profile.instagramHandle}
            </a>
            <span className="text-paper/60">{profile.followers.toLocaleString()} followers</span>
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-paper/95 shadow-[0_1px_0_0_rgba(16,18,22,0.12)] backdrop-blur" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-extrabold uppercase tracking-tight">
            RRS<span className="text-cobalt">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-sweep text-sm font-semibold uppercase tracking-[0.14em] text-ink/70 transition hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 bg-ink px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-paper transition hover:bg-cobalt"
            >
              Follow
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </nav>

        {/* Scroll progress */}
        <div className="h-[3px] w-full bg-transparent">
          <div className="h-full bg-cobalt transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink/10 bg-paper px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold uppercase tracking-tight"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 bg-ink px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-paper"
            >
              Follow on Facebook <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
