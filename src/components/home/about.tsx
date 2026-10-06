import Image from "next/image";
import { team } from "@/content/team";

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-8 border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">About us</p>
            <h2
              id="about-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
            >
              Built in Kumasi, for Ghana&apos;s cocoa farmers.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-fg-muted lg:pt-9">
            Husker AI started at the Kwame Nkrumah University of Science and
            Technology (KNUST). We saw cocoa farmers burn or throw away tonnes
            of husk every season, while companies across Ghana were looking
            for exactly that husk. We are building the AI and the marketplace
            to connect the two.
          </p>
        </div>

        <ul className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li key={member.name}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-900">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={`${member.name}, ${member.role} at Husker AI`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                    className="object-cover object-top"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="grid size-full place-items-center bg-ink-800 font-display text-5xl font-semibold text-fg-muted"
                  >
                    {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                )}
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-fg-muted">{member.role}</p>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-fg-muted transition-colors hover:border-[#0a66c2] hover:text-[#0a66c2]"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
