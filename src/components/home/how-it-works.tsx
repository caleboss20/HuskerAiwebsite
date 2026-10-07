import Image from "next/image";
import { grades } from "@/content/how-it-works";
import { AppTourSteps } from "./app-tour";
import { ScanDemo } from "./scan-demo";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-8 border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">How it works</p>
        <h2
          id="how-heading"
          className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
        >
          From husk pile to paying buyer in four steps.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-fg-muted">
          Real screens from the Husker AI app, built for farmers on everyday
          Android phones.
        </p>
      </div>

      <div id="app" className="scroll-mt-8">
        <AppTourSteps />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ScanDemo />

        <div className="mt-28 sm:mt-32">
          <div>
            <h3 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Every grade has a buyer.
            </h3>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-fg-muted">
              The marketplace matches your grade to companies that need it, so
              even older husk earns money instead of being burned.
            </p>
          </div>

          <ul className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            {grades.map((g) => (
              <li key={g.grade}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={g.image}
                    alt={g.imageAlt}
                    fill
                    sizes="(min-width: 768px) 360px, 100vw"
                    placeholder="blur"
                    className="object-cover"
                    style={g.imagePosition ? { objectPosition: g.imagePosition } : undefined}
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <p className="font-display text-2xl font-semibold tracking-tight text-fg">
                    Grade {g.grade}
                  </p>
                  <p className="text-sm text-fg-muted">{g.quality}</p>
                </div>
                <p className="mt-3 border-t border-line pt-3 text-fg">
                  <span className="text-fg-muted">Bought for </span>
                  {g.uses.join(" and ").toLowerCase()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
