import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Camera, Expand, X } from "lucide-react";
import { gallery } from "../data/profile";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((a) => (a === null ? a : (a + dir + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <section id="gallery" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 flex items-center gap-4">
          <span className="font-display text-sm font-bold text-cobalt">(03)</span>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.28em]">The Frames</h2>
          <span className="h-px flex-1 bg-ink/20" />
        </div>

        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h3 className="reveal max-w-xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
            Every fit tells
            <br />a <span className="text-cobalt">story.</span>
          </h3>
          <p className="reveal flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-ink/50">
            <Camera className="h-4 w-4 text-flame" /> Tap a frame to enlarge
          </p>
        </div>

        {/* Scattered postcards */}
        <div className="columns-2 gap-6 md:columns-3 md:gap-8 [column-fill:_balance]">
          {gallery.map((shot, i) => (
            <button
              key={shot.src}
              onClick={() => setActive(i)}
              className="reveal group mb-6 block w-full break-inside-avoid glass-panel p-2 text-left shadow-[0_12px_24px_rgba(0,0,0,0.1)] transition-all duration-[400ms] cubic-bezier(0.175, 0.885, 0.32, 1.275) hover:z-10 hover:shadow-[0_20px_40px_rgba(34,66,255,0.25)] md:mb-8 rounded-sm"
              style={{
                ["--reveal-delay" as string]: `${(i % 3) * 90}ms`,
                transform: `rotate(${shot.tilt}deg)`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg) scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${shot.tilt}deg)`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={shot.src}
                  alt={shot.caption}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center bg-ink text-paper opacity-0 transition-opacity group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
              </div>
              <div className="flex items-center justify-between px-1 pb-0.5 pt-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  {String(i + 1).padStart(2, "0")} — {shot.caption}
                </span>
                <span className="bg-paper-dim px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/60">
                  {shot.tag}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-xl"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border-2 border-paper/40 text-paper transition hover:border-flame hover:text-flame"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border-2 border-paper/40 text-paper transition hover:border-flame hover:text-flame sm:left-6"
            aria-label="Previous"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border-2 border-paper/40 text-paper transition hover:border-flame hover:text-flame sm:right-6"
            aria-label="Next"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[active].src}
              alt={gallery[active].caption}
              className="max-h-[78vh] w-auto border-2 border-paper object-contain"
            />
            <figcaption className="mt-4 flex items-center justify-between gap-4 text-paper">
              <span className="font-display text-sm font-bold uppercase tracking-[0.14em]">
                {String(active + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")} —{" "}
                {gallery[active].caption}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-paper/50">
                {gallery[active].tag}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
