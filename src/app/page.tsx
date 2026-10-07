import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { AppTour } from "@/components/home/app-tour";
import { Audiences } from "@/components/home/audiences";
import { HowItWorks } from "@/components/home/how-it-works";
import { Impact } from "@/components/home/impact";
import { Waitlist } from "@/components/home/waitlist";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Impact />
      <HowItWorks />
      <AppTour />
      <Audiences />
      <About />
      <Waitlist />
    </main>
  );
}
