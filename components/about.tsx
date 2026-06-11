export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-12 px-6 py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <h2 className="font-display text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
          Not an agency.
          <br />
          <em className="text-moss">One developer.</em>
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            By day I run the online side of a busy UK retailer: the shop
            itself, the stock systems behind it and the search rankings in
            front of it. So anything I build for you is shaped by actually
            running this stuff day to day, not handing it over and moving on.
          </p>
          <p>
            That means when you ask &ldquo;can the website talk to the
            till?&rdquo; or &ldquo;why doesn&rsquo;t Google show us?&rdquo;,
            you get a straight answer from the person who&rsquo;ll do the
            work. No account managers, no ticket queue.
          </p>
          <p>
            I live up here in the North Cotswolds. If you&rsquo;re nearby, we
            can sort most things out over a coffee.
          </p>
        </div>
      </div>
    </section>
  );
}
