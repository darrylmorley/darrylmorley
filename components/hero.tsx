import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-40 sm:pt-24 sm:pb-56">
        <p className="rise rise-1 font-mono text-xs tracking-[0.2em] text-moss uppercase">
          {site.towns.join("  ·  ")}
        </p>
        <h1 className="rise rise-2 mt-6 max-w-3xl font-display text-5xl leading-[1.05] font-medium tracking-tight sm:text-7xl">
          Websites that <em className="text-moss">work</em>, built just down
          the road.
        </h1>
        <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
          I&rsquo;m Darryl, a web developer in the {site.region}. I build fast
          websites and online shops, connect the systems behind them, and
          stick around after launch.
        </p>
        <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-paper transition-colors hover:bg-moss-deep"
          >
            Email me
          </a>
          <a
            href={site.phoneHref}
            className="rounded-full border border-ink/25 px-7 py-3.5 font-mono text-sm transition-colors hover:border-moss hover:text-moss"
          >
            {site.phone}
          </a>
        </div>
      </div>

      {/* Rolling hills in layered stone tones */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 220"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 160 C 240 80, 420 90, 640 140 C 860 190, 1100 100, 1440 130 L 1440 220 L 0 220 Z"
          className="fill-stone-soft"
          opacity="0.7"
        />
        <path
          d="M0 200 C 300 130, 560 170, 820 180 C 1080 190, 1260 140, 1440 170 L 1440 220 L 0 220 Z"
          className="fill-stone"
          opacity="0.35"
        />
        <path
          d="M0 215 C 360 175, 760 205, 1120 195 C 1280 191, 1380 198, 1440 200 L 1440 220 L 0 220 Z"
          className="fill-moss"
          opacity="0.25"
        />
      </svg>
    </section>
  );
}
