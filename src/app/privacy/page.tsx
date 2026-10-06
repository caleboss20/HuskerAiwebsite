import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const LAST_UPDATED = "6 October 2026";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Husker AI collects, uses and protects the personal information you share with us, including waitlist sign-ups.",
  alternates: { canonical: "/privacy" },
};

// Plain-English draft. Have it reviewed before launch.
export default function PrivacyPage() {
  const { email } = siteConfig.contact;
  const contactLink = email ? (
    <a href={`mailto:${email}`}>{email}</a>
  ) : (
    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
      our LinkedIn page
    </a>
  );

  return (
    <main className="flex-1 px-5 pb-24 pt-32 sm:px-6 sm:pt-36">
      <article className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Legal</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          Privacy policy
        </h1>
        <p className="mt-4 text-fg-muted">Last updated {LAST_UPDATED}</p>

        <div className="mt-12 space-y-10 leading-relaxed text-fg-muted [&_a]:font-medium [&_a]:text-brand-700 [&_a]:underline [&_a]:underline-offset-2 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-fg [&_li]:mt-2 [&_p]:mt-3 [&_strong]:text-fg [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          <section>
            <p className="!mt-0 text-lg text-fg">
              Husker AI helps cocoa farmers in Ghana earn from their cocoa pod
              husks. This policy explains what personal information we
              collect through this website, why we collect it and the choices
              you have. We keep it short and in plain English.
            </p>
          </section>

          <section>
            <h2>Who we are</h2>
            <p>
              Husker AI is a team based at the Kwame Nkrumah University of
              Science and Technology (KNUST), Kumasi, Ghana. We are responsible
              for the personal information you share with us on this website.
            </p>
          </section>

          <section>
            <h2>What we collect</h2>
            <p>When you join our waitlist, we collect what you type into the form:</p>
            <ul>
              <li>your name</li>
              <li>your phone number and/or email address</li>
              <li>whether you are a farmer, buyer, partner or investor</li>
              <li>your town or community, if you give it</li>
              <li>any notes you choose to add</li>
            </ul>
            <p>
              We do not use advertising trackers, and we do not ask for
              payment details or national ID numbers on this website.
            </p>
          </section>

          <section>
            <h2>How we use it</h2>
            <ul>
              <li>to contact you when Husker AI becomes available in your area;</li>
              <li>to send you updates about pilots and launches, if you are a partner or investor;</li>
              <li>to understand where demand is, so we can plan our rollout.</li>
            </ul>
            <p>
              We use your information only because you chose to give it to us.
              You can withdraw that consent at any time (see{" "}
              <a href="#your-rights">your rights</a>).
            </p>
          </section>

          <section>
            <h2>Who we share it with</h2>
            <p>
              <strong>We do not sell your personal information.</strong> We
              store waitlist sign-ups with trusted service providers that help
              us run the website and keep records (such as Google Workspace
              and Vercel, our hosting provider). They process it only on our
              behalf. We may also disclose information if the law requires it.
            </p>
          </section>

          <section>
            <h2>How long we keep it</h2>
            <p>
              We keep waitlist details until Husker AI launches in your area
              and for up to 24 months after, unless you ask us to delete them
              sooner.
            </p>
          </section>

          <section>
            <h2>Keeping it safe</h2>
            <p>
              Only members of the Husker AI team who need your details can see
              them. The website uses encrypted connections (HTTPS). No system
              is perfectly secure, but we take reasonable steps to protect your
              information.
            </p>
          </section>

          <section id="your-rights" className="scroll-mt-28">
            <h2>Your rights</h2>
            <p>Under Ghana&apos;s Data Protection Act, 2012 (Act 843), you can ask us to:</p>
            <ul>
              <li>tell you what information we hold about you;</li>
              <li>correct anything that is wrong;</li>
              <li>delete your information or remove you from the waitlist;</li>
              <li>stop contacting you.</li>
            </ul>
            <p>
              To do any of these, contact us through {contactLink}. If you are
              not happy with how we handle your information, you can also
              contact Ghana&apos;s Data Protection Commission.
            </p>
          </section>

          <section>
            <h2>Children</h2>
            <p>
              Our waitlist is meant for adults. If you are under 18, please ask
              a parent or guardian to sign up instead.
            </p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              If we change this policy, we will update the date at the top of
              this page.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about your privacy? Reach us through {contactLink}.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-surface-strong"
          >
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              className="size-4 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 10H4M9 5l-5 5 5 5" />
            </svg>
            Back to home
          </Link>
        </div>
      </article>
    </main>
  );
}
