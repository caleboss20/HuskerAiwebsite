import { siteConfig } from "@/lib/site";

// Placeholder until the real home page is designed.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-xl text-lg text-foreground/70">
        {siteConfig.description}
      </p>
    </main>
  );
}
