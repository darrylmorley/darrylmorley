import { site } from "@/lib/site";

export function Footer() {
  // Evaluated at build time, the site is statically exported
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/15">
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4 px-6 py-8 text-sm text-ink-soft">
        <p>
          {site.name} is a trading name of {site.company} · © {year}
        </p>
        <p className="font-mono text-xs">
          {site.name} · web developer · {site.region}
        </p>
      </div>
    </footer>
  );
}
