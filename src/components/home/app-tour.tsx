import Image from "next/image";
import { PhoneMockup } from "@/components/phone-mockup";
import { appTour } from "@/content/app-tour";

// Three real app screens in phone frames. Desktop: side by side.
// Phones: swipe horizontally (CSS scroll-snap, no JS).
export function AppTour() {
  return (
    <section id="app" aria-labelledby="app-heading" className="scroll-mt-8 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Inside the app</p>
        <h2
          id="app-heading"
          className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
        >
          From photo to paying buyer, in one app.
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-fg-muted">
          These are real screens from Husker AI, built for farmers on
          everyday Android phones.
        </p>
      </div>

      <ol className="mx-auto mt-14 flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-6 lg:grid lg:grid-cols-3 lg:gap-10 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
        {appTour.map((step, i) => (
          <li key={step.title} className="w-[78%] max-w-[300px] shrink-0 snap-center sm:w-[290px] lg:w-auto lg:max-w-none">
            <PhoneMockup>
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="290px"
                quality={90}
                placeholder="blur"
                className="object-cover object-top"
              />
            </PhoneMockup>
            <div className="mx-auto mt-8 max-w-[290px]">
              <span className="font-display text-sm font-semibold tabular-nums text-brand-700">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-fg">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-fg-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-center text-xs text-fg-muted lg:hidden">Swipe to see each step</p>
    </section>
  );
}
