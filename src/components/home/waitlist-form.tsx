"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const roles = [
  { value: "farmer", label: "Cocoa farmer" },
  { value: "buyer", label: "Husk buyer" },
  { value: "partner", label: "Partner" },
  { value: "investor", label: "Investor" },
];

const initialState: WaitlistState = { status: "idle" };

const inputClass =
  "mt-1.5 block w-full rounded-lg border border-line bg-background px-4 py-3 text-fg placeholder:text-fg-muted/70 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20 aria-[invalid=true]:border-red-600";

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);
  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-surface p-8">
        <p className="font-display text-2xl font-semibold text-fg">You&apos;re on the list.</p>
        <p className="mt-2 text-fg-muted">
          Thank you. We&apos;ll contact you as soon as Husker AI is available in your area.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="grid gap-5">
        <div>
          <label htmlFor="wl-name" className="text-sm font-medium text-fg">Full name</label>
          <input id="wl-name" name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? "wl-name-err" : undefined} className={inputClass} />
          {errors.name && <p id="wl-name-err" className="mt-1 text-sm text-red-700">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="wl-contact" className="text-sm font-medium text-fg">Phone or email</label>
          <input id="wl-contact" name="contact" autoComplete="tel" placeholder="024 123 4567" required aria-invalid={!!errors.contact} aria-describedby={errors.contact ? "wl-contact-err" : undefined} className={inputClass} />
          {errors.contact && <p id="wl-contact-err" className="mt-1 text-sm text-red-700">{errors.contact}</p>}
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-fg">I am a</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {roles.map((r, i) => (
              <label key={r.value} className="flex cursor-pointer items-center gap-2 rounded-lg border border-line bg-background px-3 py-2.5 text-sm text-fg has-[:checked]:border-brand-600 has-[:checked]:bg-brand-600/10">
                <input type="radio" name="role" value={r.value} defaultChecked={i === 0} className="accent-brand-600" />
                {r.label}
              </label>
            ))}
          </div>
          {errors.role && <p className="mt-1 text-sm text-red-700">{errors.role}</p>}
        </fieldset>

        <div>
          <label htmlFor="wl-community" className="text-sm font-medium text-fg">
            Town or community <span className="font-normal text-fg-muted">(optional)</span>
          </label>
          <input id="wl-community" name="community" autoComplete="address-level2" placeholder="e.g. Goaso" className={inputClass} />
        </div>

        {/* Honeypot for bots */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

        {state.status === "error" && (
          <p role="alert" className="text-sm text-red-700">{state.message}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-brand-600 px-5 py-3.5 font-semibold text-on-brand transition-colors hover:bg-brand-500 disabled:opacity-60"
        >
          {pending ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
    </form>
  );
}
