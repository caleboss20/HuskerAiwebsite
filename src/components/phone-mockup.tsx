import type { ReactNode } from "react";

// Phone frame for app screenshots. Pass an <Image> of the real
// screen as children; the inner area is 9:19.5 like a modern phone.
export function PhoneMockup({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[270px] sm:w-[290px]">
      <div className="rounded-[2.75rem] bg-gradient-to-b from-ink-800 to-ink-900 p-2.5 shadow-2xl shadow-black/60 ring-1 ring-white/15">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.25rem] bg-white">
          <div
            aria-hidden
            className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black"
          />
          {children}
        </div>
      </div>
    </div>
  );
}
