export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <h2 className="reveal font-display text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
          Not an agency.
          <br />
          <em className="text-moss">One developer.</em>
        </h2>
        <div className="reveal space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            I run the online side of a busy UK retailer: the shop, the stock
            systems behind it, and the search rankings in front of it.
            That&rsquo;s not a side project: it&rsquo;s the reason anything I
            build for you is shaped by actually running this stuff, not
            handing it over and moving on.
          </p>
          <p>
            So when you ask &ldquo;can the website talk to the till?&rdquo;
            or &ldquo;why doesn&rsquo;t Google show us?&rdquo;, you get a
            straight answer from the person who&rsquo;ll do the work. No
            account managers, no ticket queue.
          </p>
          <p>
            If you want something to poke at: I also build and ship my own
            software, like{" "}
            <a
              href="https://www.whatcable.uk"
              className="text-moss underline decoration-stone underline-offset-4 transition-colors hover:text-moss-deep"
            >
              WhatCable
            </a>
            , a Mac app that tells you what your USB-C cables can actually
            do. Designed, built and supported by one person, start to finish.
          </p>
          <p>
            I&rsquo;m based in the North Cotswolds. If you&rsquo;re nearby,
            most things can be sorted over a coffee.
          </p>
        </div>
      </div>
    </section>
  );
}
