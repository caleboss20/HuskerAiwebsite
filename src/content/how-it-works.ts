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
