import type { StaticImageData } from "next/image";
import caleb from "@/assets/team/caleb.webp";
import elijah from "@/assets/team/elijah.webp";
import frank from "@/assets/team/frank.webp";
import joseph from "@/assets/team/joseph.webp";
import wilhelmina from "@/assets/team/wilhelmina.webp";

export type TeamMember = {
  name: string;
  role: string;
  // Missing photo shows the person's initials instead.
  photo?: StaticImageData;
  linkedin?: string;
};

// Shown in the About section and listed as founders in the site's
// structured data.
export const team: TeamMember[] = [
  {
    name: "Frank Agyare",
    role: "Co-founder & AI/ML Lead",
    photo: frank,
    linkedin: "https://www.linkedin.com/in/frank-agyare-141269334",
  },
  {
    name: "Caleb Antwi",
    role: "Co-founder & Mobile App Engineer",
    photo: caleb,
    linkedin: "https://www.linkedin.com/in/calebantwi1",
  },
  {
    name: "Wilhelmina Adjah",
    role: "Head of Marketing, Research & Partnerships",
    photo: wilhelmina,
    linkedin: "https://www.linkedin.com/in/wilhelmina-adjah-261219330",
  },
  {
    name: "Ayinomba Elijah",
    role: "Backend Engineer",
    photo: elijah,
  },
  {
    name: "Joseph Amankwah",
    role: "Software Engineer",
    photo: joseph,
  },
];
