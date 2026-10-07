import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#farmers", label: "For farmers" },
  { href: "/#about", label: "About" },
];

function Logo() {
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className="block">
      <Image
        src={logo}
        alt={siteConfig.name}
        loading="eager"
        sizes="160px"
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  );
}

// Server-rendered; the mobile menu uses <details> so it needs no JS.
export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6"
      >
        <Logo />

        <ul className="hidden items-center gap-9 text-sm text-fg-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-fg">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#waitlist"
          className="hidden rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-500 md:inline-block"
        >
          Join the waitlist
        </Link>

        <details className="group relative md:hidden">
          <summary
            aria-label="Open menu"
            className="flex size-10 cursor-pointer list-none items-center justify-center rounded-lg text-fg hover:bg-surface-strong [&::-webkit-details-marker]:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path className="group-open:hidden" d="M4 7h16M4 12h16M4 17h16" />
              <path className="hidden group-open:block" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </summary>
          <div className="absolute right-0 top-12 w-60 rounded-2xl border border-line bg-background p-2 shadow-2xl">
            <ul className="flex flex-col text-fg-muted">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block rounded-xl px-4 py-2.5 hover:bg-surface hover:text-fg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/#waitlist"
              className="mt-2 block rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-on-brand"
            >
              Join the waitlist
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
