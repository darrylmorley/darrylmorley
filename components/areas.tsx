import { site } from "@/lib/site";

export function Areas() {
  return (
    <section className="relative overflow-hidden bg-moss-deep text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="reveal font-mono text-xs tracking-[0.2em] text-stone-soft uppercase">
          Where I work
        </h2>
        {/* Towns as stops along a dotted trail */}
        <ul className="reveal relative mt-10 space-y-7 border-l border-dashed border-paper/30 pl-10">
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
          And the villages in between. Further afield works too, everything
          travels over the internet these days.
        </p>
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
