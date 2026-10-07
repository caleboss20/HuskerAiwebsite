import type { StaticImageData } from "next/image";
import buyers from "@/assets/app/buyers.webp";
import result from "@/assets/app/result.webp";
import scan from "@/assets/app/scan.webp";

// Real screens from the Husker AI app, in the order a farmer uses it.
export const appTour: { title: string; body: string; image: StaticImageData; alt: string }[] = [
  {
    title: "Scan the pile",
    body: "Spread the husks in the frame and tap capture. The camera guides you to hold steady.",
    image: scan,
    alt: "Husker AI scan screen with a pile of cocoa pod husks in the camera frame and a capture button",
  },
  {
    title: "Get your grade and weight",
    body: "The AI grades every husk, shows the Grade A, B and C mix and estimates wet and dry weight.",
    image: result,
    alt: "Husker AI result screen showing Grade A at 89% confidence, a grade distribution chart and 125 kg estimated wet weight",
  },
  {
    title: "Choose your buyer",
    body: "Buyers send offers for your batch. Call or WhatsApp them, agree a price and arrange pickup.",
    image: buyers,
    alt: "Husker AI enquiries screen listing buyer offers for 5 sacs of Grade A husk, with call and WhatsApp buttons",
  },
];
