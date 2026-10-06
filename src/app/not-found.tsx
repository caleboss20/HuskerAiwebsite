import type { Metadata } from "next";
import Link from "next/link";
import { LostPod } from "@/components/lost-pod";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-5 pb-24 pt-36 sm:px-6">
      <div className="text-center">
        <LostPod />

        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Error 404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          This page wandered off the farm.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-fg-muted">
          The link may be broken or the page may have moved. Let&apos;s get
          you back to the harvest.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-500"
          >
            Back to home
          </Link>
          <Link
            href="/#waitlist"
            className="rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface-strong"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </main>
  );
}
