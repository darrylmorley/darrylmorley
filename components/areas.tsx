import { site } from "@/lib/site";

export function Areas() {
  return (
    <section className="bg-moss-deep text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="font-mono text-xs tracking-[0.2em] text-stone-soft uppercase">
          Where I work
        </h2>
        <ul className="mt-8 space-y-2">
          {site.towns.map((town) => (
            <li
              key={town}
              className="font-display text-4xl font-medium tracking-tight italic sm:text-6xl"
            >
              {town}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/75">
          And the villages in between. Further afield works too, everything
          travels over the internet these days.
        </p>
      </div>
    </section>
  );
}
