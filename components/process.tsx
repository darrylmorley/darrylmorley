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
    <section id="process" className="bg-paper-deep">
      <div className="mx-auto max-w-6xl scroll-mt-12 px-6 py-20 sm:py-28">
        <h2 className="font-mono text-xs tracking-[0.2em] text-moss uppercase">
          How it works
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="flex size-10 items-center justify-center rounded-full border border-moss font-display text-lg text-moss">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-xl font-medium tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
