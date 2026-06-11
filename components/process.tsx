const steps = [
  {
    number: "1",
    title: "We talk",
    body: "A chat about what you need. Free, no obligation, plain English.",
  },
  {
    number: "2",
    title: "You get a fixed quote",
    body: "One price, written down. No surprises on the invoice.",
  },
  {
    number: "3",
    title: "I build it",
    body: "You see progress as it happens, not a big reveal at the end.",
  },
  {
    number: "4",
    title: "I stick around",
    body: "Launch isn't the end. Updates, fixes and advice when you need them.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28">
      <h2 className="reveal font-mono text-xs tracking-[0.2em] text-moss uppercase">
        How it works
      </h2>
      <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.number} className="reveal">
            <div className="flex items-center gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-moss font-display text-lg text-moss">
                {step.number}
              </span>
              {index < steps.length - 1 && (
                <span
                  className="hidden flex-1 border-t border-dashed border-moss/30 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
            <h3 className="mt-5 font-display text-xl font-medium tracking-tight">
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
