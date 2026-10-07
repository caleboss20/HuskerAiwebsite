# Waitlist → Formspree

The waitlist form POSTs each signup as JSON to `WAITLIST_WEBHOOK_URL`.
With Formspree you get an email for every signup and a dashboard to view
and export them (free plan: 50 submissions a month).

1. Sign up at [formspree.io](https://formspree.io) with the team email
   (huskertechnologies@gmail.com) and confirm the email.
2. Click **+ New form**, name it "Husker AI waitlist".
3. Copy the form endpoint. It looks like `https://formspree.io/f/abcdwxyz`.
4. In Vercel → Project → **Settings → Environment Variables**, add:
   - Key: `WAITLIST_WEBHOOK_URL`
   - Value: your Formspree endpoint
   - Environments: Production (and Preview if you like)
5. **Redeploy** (Deployments → latest → ⋯ → Redeploy). Environment variable
   changes only apply to new deployments.
6. Submit a test signup on the live site. It appears in the Formspree
   dashboard and in your inbox. Formspree may ask you to confirm the first
   submission.

Each submission includes: `name`, `phone`, `email`, `role`, `community`,
`notes` and `createdAt`.

For local testing, put the same line in `.env.local` and restart `npm run dev`.
