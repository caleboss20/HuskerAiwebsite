import type { StaticImageData } from "next/image";
import gradeA from "@/assets/grade-a.webp";
import gradeB from "@/assets/grade-b.webp";
import gradeC from "@/assets/grade-c.webp";

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

// Detection boxes for the scan demo, as % of the square husk-pile
// photo (x, y = top-left). Grades and confidences are illustrative.
export const scanDetections = [
  { x: 34.5, y: 71.5, w: 6, h: 7, grade: "B", score: 91 },
  { x: 26, y: 88, w: 10, h: 9, grade: "B", score: 89 },
  { x: 42, y: 87, w: 13, h: 10, grade: "A", score: 95 },
  { x: 53, y: 79, w: 11, h: 9, grade: "A", score: 93 },
  { x: 63, y: 75, w: 8, h: 8, grade: "A", score: 90 },
  { x: 54, y: 84, w: 17, h: 15, grade: "B", score: 88 },
  { x: 72, y: 81, w: 10, h: 12, grade: "B", score: 86 },
  { x: 85, y: 79, w: 11, h: 8, grade: "A", score: 94 },
  { x: 8, y: 80, w: 9, h: 7, grade: "B", score: 87 },
  { x: 10, y: 90, w: 7, h: 6, grade: "C", score: 84 },
];
