import { site } from "@/lib/site";

const navLinks = [
  { href: "#services", label: "What I do" },
  { href: "#process", label: "How it works" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="rise rise-1 sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-6 px-6 py-5">
      <a
        href="#top"
        className="font-display text-xl font-semibold tracking-tight"
      >
        Darryl Morley
      </a>
      <nav className="hidden items-baseline gap-7 text-sm text-ink-soft sm:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href={site.phoneHref}
        className="font-mono text-sm text-moss transition-colors hover:text-moss-deep"
      >
        {site.phone}
      </a>
      </div>
    </header>
  );
}
