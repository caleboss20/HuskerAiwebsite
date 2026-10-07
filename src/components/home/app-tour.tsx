import Image from "next/image";
import { PhoneMockup } from "@/components/phone-mockup";
import { appTour } from "@/content/app-tour";

// The "How it works" steps, each shown on a real app screen in a phone
// frame. Desktop: one row. Phones: swipe horizontally (CSS scroll-snap).
export function AppTourSteps() {
  return (
    <div>
      <ol className="mx-auto mt-14 flex max-w-6xl snap-x snap-mandatory gap-10 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:gap-12 sm:px-6 lg:grid lg:grid-cols-4 lg:gap-12 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
        {appTour.map((step, i) => (
          <li key={step.title} className="w-[78%] max-w-[300px] shrink-0 snap-center sm:w-[270px] lg:w-auto lg:max-w-none">
            <PhoneMockup className="w-full max-w-[270px] lg:max-w-[240px]">
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="(min-width: 1024px) 240px, 290px"
                quality={90}
                placeholder="blur"
                className={`object-cover ${step.position === "bottom" ? "origin-bottom scale-[1.35] object-bottom" : "object-top"}`}
              />
            </PhoneMockup>
            <div className="mx-auto mt-8 max-w-[270px] lg:max-w-[240px]">
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
    </div>
  );
}
