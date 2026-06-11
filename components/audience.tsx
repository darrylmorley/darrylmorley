const audiences = [
  {
    title: "Holiday lets & B&Bs",
    body: "Direct bookings without the agency commission.",
  },
  {
    title: "Farm shops & food",
    body: "Online orders, click and collect, stock that stays right.",
  },
  {
    title: "Pubs & cafes",
    body: "Menus people can actually find, tables they can book.",
  },
  {
    title: "Independent shops",
    body: "A proper online shop, talking to your till.",
  },
  {
    title: "Trades & services",
    body: "A site that turns “someone recommended you” into a call.",
  },
  {
    title: "Makers & antiques",
    body: "Your work online and selling, without the marketplace fees.",
  },
];

export function Audience() {
  return (
    <section className="bg-paper-deep">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="reveal font-mono text-xs tracking-[0.2em] text-moss uppercase">
          Who it&rsquo;s for
        </h2>
        <p className="reveal mt-6 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Built for the businesses <em className="text-moss">round here</em>.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="reveal group rounded-2xl border border-ink/10 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-moss/40 hover:shadow-[0_12px_30px_-18px_rgba(34,28,20,0.4)]"
            >
              <h3 className="font-display text-xl font-medium tracking-tight transition-colors group-hover:text-moss">
                {audience.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {audience.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
