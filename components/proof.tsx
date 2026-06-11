const proofItems = [
  {
    title: "Payment integrations",
    body: "Barclays and Stripe, taking real money every day.",
  },
  {
    title: "Retail EPOS & stock systems",
    body: "Tills, stock feeds and product data, kept in sync so the shelf and the website agree.",
  },
  {
    title: "Multi-storefront e-commerce",
    body: "Five storefronts run from one stack: online shops, CMS builds, product data and the SEO in front of it.",
  },
  {
    title: "WhatCable, a shipped Mac app",
    body: "My own product, with paying customers. Designed, built and supported by one person, start to finish.",
    href: "https://www.whatcable.uk",
  },
];

export function Proof() {
  return (
    <section className="bg-paper-deep">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="reveal font-mono text-xs tracking-[0.2em] text-moss uppercase">
          Track record
        </h2>
        <p className="reveal mt-6 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Built, and <em className="text-moss">running today</em>.
        </p>
        <dl className="mt-12 border-t border-ink/15">
          {proofItems.map((item) => (
            <div
              key={item.title}
              className="reveal grid gap-2 border-b border-ink/15 py-7 sm:grid-cols-[1fr_1.6fr] sm:gap-10"
            >
              <dt className="font-display text-xl font-medium tracking-tight">
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-moss underline decoration-stone underline-offset-4 transition-colors hover:text-moss-deep"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </dt>
              <dd className="leading-relaxed text-ink-soft">{item.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
