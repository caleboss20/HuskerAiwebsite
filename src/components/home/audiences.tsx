import Image from "next/image";
import farmerPhoto from "@/assets/farmer.webp";
import { buyerBenefits, farmerBenefits } from "@/content/audiences";

type Benefit = { title: string; body: string };

function BenefitList({ items }: { items: Benefit[] }) {
  return (
    <ul className="mt-8 space-y-6">
      {items.map((item) => (
        <li key={item.title} className="flex gap-4">
          <svg
            aria-hidden
            viewBox="0 0 20 20"
            className="mt-1 size-5 shrink-0 text-brand-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 10.5l4 4 8-9" />
          </svg>
          <div>
            <h4 className="font-semibold text-fg">{item.title}</h4>
            <p className="mt-1 leading-relaxed text-fg-muted">{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Audiences() {
  return (
    <section aria-label="Who Husker AI is for" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl space-y-24 px-5 sm:space-y-32 sm:px-6">
        {/* Farmers */}
        <div id="farmers" className="grid scroll-mt-8 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={farmerPhoto}
              alt="Ghanaian cocoa farmer holding a ripe cocoa pod on his farm"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              placeholder="blur"
              className="object-cover object-[60%_30%]"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">For farmers</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Your husks are worth money.
            </h2>
            <BenefitList items={farmerBenefits} />
          </div>
        </div>

        {/* Buyers */}
        <div id="buyers" className="grid scroll-mt-8 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">For buyers</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Graded cocoa husk, sourced direct from farms.
            </h2>
            <BenefitList items={buyerBenefits} />
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-brand-700 p-8 text-white sm:p-10 lg:order-1">
            <p className="font-display text-2xl font-semibold leading-snug sm:text-3xl">
              Feed, potash, soap, cosmetics, biochar, fertiliser. If you turn
              cocoa husk into a product, Husker AI connects you with the
              farmers who have it.
            </p>
            <a
              href="#waitlist"
              className="mt-10 inline-flex w-fit rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:bg-white/90"
            >
              Register as a buyer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
