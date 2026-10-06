import type { StaticImageData } from "next/image";
import gradeA from "@/assets/grade-a.webp";
import gradeB from "@/assets/grade-b.webp";
import gradeC from "@/assets/grade-c.webp";
import huskPile from "@/assets/husk-pile.webp";
import podPile from "@/assets/pod-pile.webp";

export const steps = [
  {
    title: "Scan your husk pile",
    body: "Point your phone at the pile and take one photo. It works offline, right on the farm.",
  },
  {
    title: "AI grades it",
    body: "Husker AI checks quality and size, then grades the pile A, B or C with an estimated weight.",
  },
  {
    title: "Sell to the right buyer",
    body: "See companies looking for your grade, what they will use it for and what they pay. Pick one and sell.",
  },
];

type Grade = {
  grade: "A" | "B" | "C";
  quality: string;
  uses: string[];
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: string;
};

// Typical end uses per grade. Clean, dry husk earns the most; lower
// grades still have buyers. Update with real marketplace data later.
export const grades: Grade[] = [
  {
    grade: "A",
    quality: "Fresh, clean and dry",
    uses: ["Animal feed", "Cosmetics & skincare"],
    image: gradeA,
    imageAlt: "Fresh yellow cocoa pod being opened, Grade A husk",
    imagePosition: "20% 50%",
  },
  {
    grade: "B",
    quality: "Part fresh, part rotting",
    uses: ["Cocoa potash", "Soap making"],
    // "Cacao black pod rot" by Scot Nelson, Wikimedia Commons, CC0.
    image: gradeB,
    imageAlt: "Cocoa pod that is half fresh and half rotting brown, Grade B husk",
  },
  {
    grade: "C",
    quality: "Older or partly decomposed",
    uses: ["Biochar", "Organic fertiliser"],
    image: gradeC,
    imageAlt: "Dark, dried cocoa pod hanging on the tree, Grade C husk",
    imagePosition: "50% 55%",
  },
];

export type Detection = { x: number; y: number; w: number; h: number; grade: "A" | "B" | "C"; score: number };

export type ScanScene = {
  image: StaticImageData;
  alt: string;
  // object-position of the photo inside the portrait frame (0–1).
  focus: { x: number; y: number };
  // Boxes as % of the full photo (x, y = top-left). Grades and
  // confidences are illustrative.
  detections: Detection[];
  // Required for openly licensed photos (e.g. CC BY-SA).
  credit?: { text: string; href: string };
};

// Each scene shows for a few seconds in the scan demo, then the next.
// Add a scene by adding an entry here.
export const scanScenes: ScanScene[] = [
  {
    image: huskPile,
    alt: "Cocoa farmers breaking pods beside a pile of cocoa husks, with AI detection boxes around each husk",
    focus: { x: 0.55, y: 0.5 },
    detections: [
      { x: 34.5, y: 71.5, w: 6, h: 7, grade: "B", score: 91 },
      { x: 26, y: 88, w: 10, h: 9, grade: "B", score: 89 },
      { x: 42, y: 87, w: 13, h: 10, grade: "A", score: 95 },
      { x: 53, y: 79, w: 11, h: 9, grade: "A", score: 93 },
      { x: 63, y: 75, w: 8, h: 8, grade: "A", score: 90 },
      { x: 54, y: 84, w: 17, h: 15, grade: "B", score: 88 },
      { x: 72, y: 81, w: 10, h: 12, grade: "B", score: 86 },
    ],
  },
  {
    image: podPile,
    alt: "Pile of harvested cocoa pods on a farm floor, with AI detection boxes around each pod",
    focus: { x: 0.5, y: 0.5 },
    detections: [
      { x: 17.8, y: 14.1, w: 9.7, h: 4, grade: "C", score: 90 },
      { x: 20.1, y: 20.8, w: 11.8, h: 5.8, grade: "B", score: 87 },
      { x: 8.3, y: 24.8, w: 13.2, h: 5.7, grade: "B", score: 89 },
      { x: 55.3, y: 25.7, w: 6.5, h: 4.8, grade: "C", score: 92 },
      { x: 50.3, y: 30.1, w: 6.9, h: 6.5, grade: "A", score: 95 },
      { x: 35.4, y: 35.9, w: 9.7, h: 7.8, grade: "A", score: 96 },
      { x: 48.6, y: 36.6, w: 7.6, h: 6.9, grade: "C", score: 88 },
      { x: 53.5, y: 39.8, w: 9.7, h: 9.3, grade: "B", score: 86 },
      { x: 63.2, y: 41.7, w: 11.1, h: 5.1, grade: "B", score: 90 },
      { x: 28.5, y: 48.1, w: 8.3, h: 8.3, grade: "A", score: 94 },
      { x: 65.6, y: 49.5, w: 7.8, h: 7.9, grade: "A", score: 93 },
      { x: 12.2, y: 51.9, w: 13.5, h: 8.3, grade: "B", score: 91 },
      { x: 48.9, y: 57.9, w: 13.9, h: 5.6, grade: "A", score: 95 },
      { x: 6.9, y: 66.5, w: 12.2, h: 6.9, grade: "B", score: 88 },
    ],
    credit: {
      text: "Photo: Otuo-Akyampong Boakye, CC BY-SA 4.0",
      href: "https://commons.wikimedia.org/wiki/File:Cocoa_pods_001.jpg",
    },
  },
];
