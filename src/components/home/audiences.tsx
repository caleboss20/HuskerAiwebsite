import Image from "next/image";
import farmerPhoto from "@/assets/farmer.webp";
import { farmerBenefits } from "@/content/audiences";

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
            <h3 className="font-semibold text-fg">{item.title}</h3>
            <p className="mt-1 leading-relaxed text-fg-muted">{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Audiences() {
  return (
    <section aria-label="For farmers" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">For farmers</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Your husks are worth money.
            </h2>
            <BenefitList items={farmerBenefits} />
          </div>
        </div>
      </div>
    </section>
  );
}
