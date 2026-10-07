import Image from "next/image";
import { CountUp } from "@/components/count-up";
import { huskCompanies, sources, stats } from "@/content/impact";

function CompanyList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
      {huskCompanies.map(({ name, logo }) => (
        <li key={name} className="flex h-10 items-center sm:h-14">
          {logo ? (
            <Image
              src={logo}
              alt={hidden ? "" : name}
              height={56}
              sizes="200px"
              className="h-full w-auto opacity-75 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
          ) : (
            <span className="whitespace-nowrap font-display text-2xl font-semibold tracking-tight text-fg/75 sm:text-4xl">
              {name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Impact() {
  const citedSources = [...new Set(stats.flatMap((s) => (s.sourceId ? [s.sourceId] : [])))];

  return (
    <section aria-labelledby="impact-heading" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Impact</p>
        <h2
          id="impact-heading"
          className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
        >
          Cocoa husk is Ghana&apos;s most wasted farm resource.
        </h2>

        {/* Each stat is a size container: the number scales with its own
            column (cqi), so the longest figure always fits on one line. */}
        <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="@container flex flex-col border-t border-line pt-6">
              <dt className="order-2 mt-2 max-w-[22ch] text-[0.95rem] leading-snug text-fg-muted">{stat.label}</dt>
              <dd className="order-1 whitespace-nowrap font-display text-[clamp(2rem,17cqi,3.25rem)] font-semibold leading-none tracking-tight text-fg">
                {stat.value === null ? (
                  <span className="text-fg-muted">TBC</span>
                ) : (
                  <>
                    {stat.prefix}
                    <CountUp value={stat.value} />
                    {stat.suffix}
                    {stat.unit && <span className="ml-1.5 text-[0.45em] font-semibold tracking-normal text-fg-muted">{stat.unit}</span>}
                    {stat.estimate && <sup className="ml-0.5 text-[0.4em] font-medium text-fg-muted">*</sup>}
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-fg-muted">
          Sources:{" "}
          {citedSources.map((id, i) => (
            <span key={id}>
              {i > 0 && "; "}
              <a href={sources[id].href} target="_blank" rel="noopener noreferrer" className="underline hover:text-fg">
                {sources[id].label}
              </a>
            </span>
          ))}
          .
          {stats.some((s) => s.estimate) && (
            <> * Husker AI estimates, based on app prices and published emission factors.</>
          )}
        </p>
      </div>

      <div className="mx-auto mt-24 max-w-6xl px-5 sm:mt-32 sm:px-6">
        <div className="border-t border-line" />
      </div>
      <div className="mt-16 sm:mt-20">
        <p className="mx-auto max-w-6xl px-5 text-center text-sm font-medium text-fg-muted sm:px-6">
          Companies in Ghana already turning cocoa husk into value
        </p>
        <div className="group mt-10 flex overflow-hidden sm:mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            <CompanyList />
            <CompanyList hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
