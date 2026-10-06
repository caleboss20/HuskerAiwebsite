import { WaitlistForm } from "./waitlist-form";

export function Waitlist() {
  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-heading"
      className="scroll-mt-8 border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Join the waitlist</p>
          <h2
            id="waitlist-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
          >
            Be first to sell your husk with Husker AI.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-fg-muted">
            We are rolling out community by community. Leave your details and
            we&apos;ll reach you by phone or email when Husker AI comes to your
            area.
          </p>
          <ul className="mt-8 max-w-md divide-y divide-line border-y border-line text-fg-muted">
            <li className="py-4"><span className="font-semibold text-fg">Farmers:</span> early access to the app and the marketplace.</li>
            <li className="py-4"><span className="font-semibold text-fg">Buyers:</span> first access to graded husk supply.</li>
            <li className="py-4"><span className="font-semibold text-fg">Partners & investors:</span> updates on pilots and results.</li>
          </ul>
        </div>
        <WaitlistForm />
      </div>
    </section>
  );
}
