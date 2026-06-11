import { site } from "@/lib/site";

export function Areas() {
  return (
    <section className="relative overflow-hidden bg-moss-deep text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="reveal font-mono text-xs tracking-[0.2em] text-stone-soft uppercase">
          Where I work
        </h2>
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            {/* Towns as stops along a dotted trail */}
            <ul className="reveal relative space-y-7 border-l border-dashed border-paper/30 pl-10">
              {site.towns.map((town) => (
                <li key={town} className="relative">
                  <span
                    className="absolute top-1/2 -left-10 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-stone ring-4 ring-moss-deep"
                    aria-hidden="true"
                  />
                  <span className="font-display text-3xl font-medium tracking-tight italic sm:text-5xl">
                    {town}
                  </span>
                </li>
              ))}
            </ul>
            <p className="reveal mt-10 max-w-xl text-lg leading-relaxed text-paper/75">
              And the villages in between. Further afield works too,
              everything travels over the internet these days.
            </p>
          </div>

          {/* Sketch map of the four towns, roughly to their real positions */}
          <svg
            className="reveal mx-auto hidden w-full max-w-md lg:block"
            viewBox="0 0 420 400"
            fill="none"
            aria-hidden="true"
          >
            {/* Compass */}
            <g className="stroke-paper" opacity="0.5" strokeWidth="1.5">
              <line x1="385" y1="48" x2="385" y2="22" />
              <path d="M 379 30 L 385 20 L 391 30" fill="none" />
            </g>
            <text
              x="385"
              y="66"
              textAnchor="middle"
              className="fill-paper font-mono"
              fontSize="13"
              opacity="0.5"
            >
              N
            </text>

            {/* Dashed roads linking the towns */}
            <path
              d="M 181 50 C 230 120, 320 180, 350 245 C 330 300, 260 330, 200 350 C 150 330, 80 300, 50 260 C 80 180, 130 100, 181 50"
              className="stroke-paper"
              strokeWidth="2"
              strokeDasharray="1 10"
              strokeLinecap="round"
              opacity="0.55"
            />

            {/* Town markers and labels */}
            <g className="fill-stone">
              <circle cx="181" cy="50" r="7" />
              <circle cx="350" cy="245" r="7" />
              <circle cx="50" cy="260" r="7" />
              <circle cx="200" cy="350" r="7" />
            </g>
            <g className="fill-paper font-mono" fontSize="13" opacity="0.9">
              <text x="200" y="46">Stratford-upon-Avon</text>
              <text x="336" y="232" textAnchor="end">Shipston-on-Stour</text>
              <text x="42" y="290">Chipping Campden</text>
              <text x="200" y="380" textAnchor="middle">Moreton-in-Marsh</text>
            </g>
          </svg>
        </div>
      </div>
      {/* Faint hill line along the bottom */}
      <svg
        className="pointer-events-none absolute right-0 bottom-0 w-full"
        viewBox="0 0 1440 80"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 80 C 360 20, 900 70, 1440 30 L 1440 80 Z"
          className="fill-paper"
          opacity="0.06"
        />
      </svg>
    </section>
  );
}
