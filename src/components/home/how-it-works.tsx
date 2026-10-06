import { grades, steps, type StepIcon } from "@/content/how-it-works";

const iconPaths: Record<StepIcon, React.ReactNode> = {
  scan: (
    <>
      <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  grade: (
    <>
      <path d="M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.4l-5.3 2.7 1-5.8-4.2-4.1 5.9-.9L12 3z" />
    </>
  ),
  market: (
    <>
      <path d="M4 9l1.5-5h13L20 9" />
      <path d="M4 9h16v2a3 3 0 0 1-5.3 2 3 3 0 0 1-5.4 0A3 3 0 0 1 4 11V9z" />
      <path d="M5.5 14v6h13v-6M10 20v-4h4v4" />
    </>
  ),
};

function StepIconSvg({ name }: { name: StepIcon }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-8 border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">How it works</p>
        <h2
          id="how-heading"
          className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
        >
          From husk pile to paying buyer in three steps.
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-line pt-6">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-600 text-on-brand">
                  <StepIconSvg name={step.icon} />
                </span>
                <span className="font-display text-sm font-semibold text-fg-muted">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-fg">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-fg-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-24 sm:mt-28">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">
            Every grade has a buyer.
          </h3>
          <p className="mt-2 max-w-xl text-fg-muted">
            The marketplace matches your grade to companies that need it, so
            even older husk earns money instead of being burned.
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {grades.map((g) => (
              <li key={g.grade} className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-xl border border-line font-display text-2xl font-semibold text-brand-700">
                    {g.grade}
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-fg">Grade {g.grade}</p>
                    <p className="text-sm text-fg-muted">{g.quality}</p>
                  </div>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">
                  Bought for
                </p>
                <ul className="mt-2 space-y-1.5">
                  {g.uses.map((use) => (
                    <li key={use} className="flex items-center gap-2 text-fg">
                      <span aria-hidden className="size-1.5 rounded-full bg-brand-600" />
                      {use}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
