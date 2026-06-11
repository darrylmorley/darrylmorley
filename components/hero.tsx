import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-48 sm:pt-24 sm:pb-72">
        <p className="rise rise-1 font-mono text-xs tracking-[0.2em] text-moss uppercase">
          {site.towns.join("  ·  ")}
        </p>
        <h1 className="rise rise-2 mt-6 max-w-4xl font-display text-5xl leading-[1.05] font-medium tracking-tight sm:text-7xl">
          Built just down the road, for the businesses that make this place{" "}
          <em className="text-moss">work</em>.
        </h1>
        <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
          I build websites and online shops, get them found on Google, wire
          up the systems behind them, and stick around after launch.
        </p>
        <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-paper transition-all hover:-translate-y-0.5 hover:bg-moss-deep"
          >
            Email me
          </a>
          {site.phone && site.phoneHref ? (
            <a
              href={site.phoneHref}
              className="rounded-full border border-ink/25 bg-paper/60 px-7 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 hover:border-moss hover:text-moss"
            >
              {site.phone}
            </a>
          ) : (
            <a
              href="#services"
              className="rounded-full border border-ink/25 bg-paper/60 px-7 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 hover:border-moss hover:text-moss"
            >
              What I do
            </a>
          )}
        </div>
        <p className="rise rise-4 mt-8 font-mono text-xs tracking-wide text-ink-soft/80">
          Fixed quotes · You deal with me · Plain English
        </p>
      </div>

      {/* Rolling hills with sun, footpath and birds */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Low sun */}
        <circle cx="1150" cy="95" r="52" className="fill-stone" opacity="0.5" />
        {/* Birds */}
        <g
          className="stroke-ink-soft"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
          fill="none"
        >
          <path d="M 980 70 q 9 -9 18 0 q 9 -9 18 0" />
          <path d="M 1040 48 q 7 -7 14 0 q 7 -7 14 0" />
          <path d="M 930 105 q 6 -6 12 0 q 6 -6 12 0" />
        </g>
        {/* Far ridge */}
        <path
          d="M0 190 C 220 120, 460 130, 700 175 C 940 220, 1180 120, 1440 165 L 1440 320 L 0 320 Z"
          className="fill-stone-soft"
          opacity="0.8"
        />
        {/* Mid ridge */}
        <path
          d="M0 245 C 280 170, 540 215, 820 230 C 1100 245, 1280 185, 1440 220 L 1440 320 L 0 320 Z"
          className="fill-stone"
          opacity="0.4"
        />
        {/* Footpath wandering over the mid ridge */}
        <path
          d="M 240 320 C 320 285, 470 270, 610 252 C 760 233, 900 240, 1010 222"
          className="stroke-paper"
          strokeWidth="5"
          strokeDasharray="2 14"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Near field */}
        <path
          d="M0 300 C 360 252, 760 295, 1120 278 C 1280 271, 1380 286, 1440 288 L 1440 320 L 0 320 Z"
          className="fill-moss"
          opacity="0.35"
        />
      </svg>
    </section>
  );
}
