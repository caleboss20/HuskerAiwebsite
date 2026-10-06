import { PhoneMockup } from "@/components/phone-mockup";
import { AppScreenPreview } from "./app-screen-preview";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_0%,rgba(16,185,129,0.28),transparent_70%),radial-gradient(45%_40%_at_10%_100%,rgba(16,185,129,0.12),transparent_70%)]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Text sits first and compact so the badge, heading and both
          buttons are visible on load, on phones too. */}
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-24 sm:px-6 lg:min-h-[min(100svh,860px)] lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pb-16 lg:pt-28">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 sm:text-sm">
            <svg aria-hidden viewBox="0 0 20 20" className="size-3.5 shrink-0 text-pod-400" fill="currentColor">
              <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
            </svg>
            Winner · 2026 Pan African AI Summit Hack-AI-Thon
          </p>

          <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.25rem]">
            Turn cocoa pod husks into{" "}
            <span className="text-brand-400">extra income.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-white/65 sm:text-base lg:mx-0">
            Scan your husks with a smartphone. Husker AI estimates quantity and
            quality, tells you what they&apos;re worth and connects you with
            buyers, offline and in your language.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#waitlist"
              className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-500"
            >
              Join the waitlist
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl"
          />
          <PhoneMockup>
            <AppScreenPreview />
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}
