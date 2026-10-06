import { PhoneMockup } from "@/components/phone-mockup";
import { AppScreenPreview } from "./app-screen-preview";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_0%,rgb(var(--glow)/0.28),transparent_70%),radial-gradient(45%_40%_at_10%_100%,rgb(var(--glow)/0.12),transparent_70%)]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

      {/* Text sits first and compact so the heading and both
          buttons are visible on load, on phones too. */}
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 pb-16 pt-24 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pb-20 lg:pt-28">
        <div className="text-center lg:pt-12 lg:text-left">
          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] text-fg sm:text-6xl lg:text-[4.25rem]">
            Turn cocoa pod husks into{" "}
            <span className="text-brand-400">extra income.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-fg-muted sm:text-base lg:mx-0">
            Scan your husks with a smartphone. Husker AI estimates quantity and
            quality, tells you what they&apos;re worth and connects you with
            buyers, offline and in your language.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#waitlist"
              className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-on-brand shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-500"
            >
              Join the waitlist
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface-strong"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--glow)/0.2)] blur-3xl"
          />
          <PhoneMockup>
            <AppScreenPreview />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}
