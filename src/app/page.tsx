import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Impact } from "@/components/home/impact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Impact />
      <HowItWorks />
    </main>
  );
}
