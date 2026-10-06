import { scanScenes } from "@/content/how-it-works";
import { ScanCarousel } from "./scan-carousel";

// Copy on the left (server-rendered), rotating scan scenes on the right.
export function ScanDemo() {
  return (
    <div className="mt-24 grid items-center gap-12 sm:mt-28 lg:grid-cols-2 lg:gap-14">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Scan in action</p>
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

      <ScanCarousel scenes={scanScenes} />
    </div>
  );
}
