import Image from "next/image";
import huskPile from "@/assets/husk-pile.webp";
import { scanDetections } from "@/content/how-it-works";

const STEP_S = 0.35; // delay between each box appearing

// The photo acts as the phone's camera view. Boxes appear one by one
// (CSS only, loops), then the scan summary shows. Server component.
export function ScanDemo() {
  const counts = scanDetections.reduce<Record<string, number>>((acc, d) => {
    acc[d.grade] = (acc[d.grade] ?? 0) + 1;
    return acc;
  }, {});
  const summaryDelay = `${scanDetections.length * STEP_S + 0.4}s`;

  return (
    <div className="mt-24 grid items-center gap-12 sm:mt-28 lg:grid-cols-2 lg:gap-14">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Scan in action</p>
        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          The AI finds every husk in the pile.
        </h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-fg-muted">
          Point the camera and Husker AI marks each husk it sees, grades it
          and adds up the pile. No scale, no guesswork.
        </p>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {[
            ["Counts", "every husk in view"],
            ["Grades", "each one A, B or C"],
            ["Estimates", "the total weight and value"],
          ].map(([term, desc]) => (
            <div key={term} className="flex gap-3 py-4">
              <dt className="w-24 shrink-0 font-semibold text-fg">{term}</dt>
              <dd className="text-fg-muted">{desc}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-3xl bg-ink-900 lg:mr-0">
        <Image
          src={huskPile}
          alt="Cocoa farmers breaking pods beside a pile of cocoa husks, with AI detection boxes drawn around each husk"
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          placeholder="blur"
          className="object-cover"
        />

        {/* Viewfinder corners */}
        <div aria-hidden className="pointer-events-none absolute inset-4 sm:inset-6">
          {["left-0 top-0 border-l-2 border-t-2", "right-0 top-0 border-r-2 border-t-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((pos) => (
            <span key={pos} className={`absolute size-8 border-white/90 sm:size-10 ${pos}`} />
          ))}
        </div>

        <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white sm:left-8 sm:top-8">
          <span className="size-2 animate-pulse rounded-full bg-[#4ade80] motion-reduce:animate-none" />
          Scanning husk pile
        </div>

        {/* Detection boxes. The square photo is cropped to 4:5 by
            object-cover, so the boxes sit on a square layer the same size
            as the rendered photo to keep their % positions accurate. */}
        <div aria-hidden className="absolute inset-y-0 left-1/2 aspect-square h-full -translate-x-1/2">
          {scanDetections.map((d, i) => (
            <div
              key={i}
              className="absolute animate-detect border-2 border-[#4ade80] motion-reduce:animate-none"
              style={{
                left: `${d.x}%`,
                top: `${d.y}%`,
                width: `${d.w}%`,
                height: `${d.h}%`,
                animationDelay: `${i * STEP_S}s`,
              }}
            >
              <span className="absolute -top-[18px] left-[-2px] whitespace-nowrap bg-[#4ade80] px-1 text-[9px] font-semibold leading-4 text-black sm:text-[10px]">
                {d.grade} {d.score}%
              </span>
            </div>
          ))}
        </div>

        {/* Scan summary */}
        <figcaption
          className="absolute right-6 top-6 w-44 animate-detect rounded-xl bg-white p-3 motion-reduce:animate-none sm:right-8 sm:top-8 sm:w-52 sm:p-4"
          style={{ animationDelay: summaryDelay, color: "#1a1a1a" }}
        >
          <p className="text-[11px] font-medium text-neutral-500">Scan result</p>
          <p className="mt-0.5 font-display text-xl font-semibold">{scanDetections.length} husks</p>
          <p className="mt-2 text-xs text-neutral-700">
            <span className="text-neutral-500">Grade </span>
            {["A", "B", "C"].map((g, i) => (
              <span key={g}>
                {i > 0 && " · "}{g} <b>{counts[g] ?? 0}</b>
              </span>
            ))}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
