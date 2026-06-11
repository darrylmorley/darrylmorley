import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
      <h2 className="reveal font-mono text-xs tracking-[0.2em] text-moss uppercase">
        Get in touch
      </h2>
      <p className="reveal mt-8 max-w-2xl font-display text-3xl leading-snug font-medium tracking-tight sm:text-4xl">
        Got something <em className="text-moss">broken</em>, slow, or still
        stuck in a spreadsheet?
      </p>
      <a
        href={`mailto:${site.email}`}
        className="reveal mt-10 inline-block font-display text-2xl font-medium break-all text-moss underline decoration-stone decoration-2 underline-offset-8 transition-colors hover:text-moss-deep sm:text-5xl"
      >
        {site.email}
      </a>
      {site.phone && site.phoneHref ? (
        <p className="reveal mt-8 text-lg text-ink-soft">
          Or call{" "}
          <a
            href={site.phoneHref}
            className="font-mono text-moss transition-colors hover:text-moss-deep"
          >
            {site.phone}
          </a>
          . If I&rsquo;m heads-down, I&rsquo;ll ring you back.
        </p>
      ) : (
        <p className="reveal mt-8 text-lg text-ink-soft">
          No contact form, no ticket system. It lands in my inbox and I reply
          myself.
        </p>
      )}
    </section>
  );
}
