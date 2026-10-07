import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#farmers", label: "For farmers" },
      { href: "/#waitlist", label: "Join the waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#about", label: "About us" },
      { href: "/#about", label: "Our team" },
    ],
  },
];

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-4" fill="currentColor">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  );
}

// Fixed warm cocoa palette, same in every theme.
export function Footer() {
  const { contact, social } = siteConfig;
  const socials = [
    social.linkedin && { href: social.linkedin, label: "Husker AI on LinkedIn", icon: <LinkedInIcon /> },
    social.x && { href: social.x, label: "Husker AI on X", icon: <XIcon /> },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  return (
    <footer className="bg-[#4a3a2e] text-[#f3ebe0]">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-6 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] md:gap-8">
          <div className="max-w-xs">
            {/* Logo sits on a cream card so the brown lettering stays readable. */}
            <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-block rounded-xl bg-[#f3ebe0] px-4 py-3">
              <Image src={logo} alt={siteConfig.name} sizes="180px" className="h-11 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#f3ebe0]/80">
              AI that helps Ghana&apos;s cocoa farmers turn discarded pod husks
              into extra income.
            </p>
            <Link
              href="/#waitlist"
              className="mt-6 inline-flex rounded-lg bg-[#567f42] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6c9a56]"
            >
              Join the waitlist
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 md:contents">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f3ebe0]/70">
                  {col.title}
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[#f3ebe0]/90 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f3ebe0]/70">Contact</h2>
            <address className="mt-4 space-y-3 text-sm not-italic text-[#f3ebe0]/90">
              {contact.email && (
                <p>
                  <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                    {contact.email}
                  </a>
                </p>
              )}
              {contact.phone && (
                <p>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">
                    {contact.phone}
                  </a>
                </p>
              )}
              <p>{contact.location}</p>
            </address>
            {socials.length > 0 && (
              <ul className="mt-5 flex gap-2">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid size-9 place-items-center rounded-full border border-[#f3ebe0]/20 text-[#f3ebe0]/90 transition-colors hover:border-white hover:text-white"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#f3ebe0]/20 pt-6 text-xs text-[#f3ebe0]/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy policy
            </Link>
            <p>Built at KNUST, Kumasi, Ghana.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
