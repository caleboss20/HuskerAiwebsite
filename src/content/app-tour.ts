import type { StaticImageData } from "next/image";
import buyers from "@/assets/app/buyers.webp";
import result from "@/assets/app/result.webp";
import scan from "@/assets/app/scan.webp";

// Real screens from the Husker AI app, in the order a farmer uses it.
// `position` picks which part of a tall screenshot shows in the phone.
export const appTour: {
  title: string;
  body: string;
  image: StaticImageData;
  alt: string;
  position?: string;
}[] = [
  {
    title: "Scan",
    body: "Point a smartphone camera at a pile of cocoa pod husks.",
    image: scan,
    alt: "Husker AI scan screen with a pile of cocoa pod husks in the camera frame and a capture button",
  },
  {
    title: "Grade",
    body: "AI classifies husks by visual condition and quality in seconds.",
    image: result,
    alt: "Husker AI result screen showing Grade A at 89% confidence and the grade distribution chart",
  },
  {
    title: "Value",
    body: "See an estimated price based on the grade and current market value.",
    // TODO: replace with a screenshot of the price screen.
    image: result,
    position: "bottom",
    alt: "Husker AI result screen showing the grade breakdown and estimated wet and dry weight of the husk pile",
  },
  {
    title: "Sell",
    body: "Connect with aggregators and feed manufacturers through the marketplace.",
    image: buyers,
    alt: "Husker AI enquiries screen listing buyer offers for 5 sacs of Grade A husk, with call and WhatsApp buttons",
  },
];
