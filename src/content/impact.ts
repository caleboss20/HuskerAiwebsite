import type { StaticImageData } from "next/image";
import adtechLogo from "@/assets/logos/adtech.png";
import asaasepaLogo from "@/assets/logos/asaasepa.png";
import mchanLogo from "@/assets/logos/mchan.png";
import moreplexLogo from "@/assets/logos/moreplex.png";
import nutripodxLogo from "@/assets/logos/nutripodx.png";
import opcLogo from "@/assets/logos/opc.png";
import tachibanaLogo from "@/assets/logos/tachibana.png";

// Content for the home page impact section. Every figure needs a
// source or `estimate: true` (shown with an asterisk and footnote);
// `value: null` renders "TBC".

export type Stat = {
  value: number | null;
  prefix?: string;
  suffix?: string;
  // Unit word shown smaller after the number, e.g. "tonnes".
  unit?: string;
  label: string;
  sourceId?: keyof typeof sources;
  // Team estimate rather than a published figure; flagged on the page.
  estimate?: boolean;
};

export const sources = {
  usda: {
    label: "USDA FAS, Ghana Cocoa Sector Overview (2025)",
    href: "https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Ghana+-+Cocoa+Sector+Overview+-+2025_Accra_Ghana_GH2025-0008.pdf",
  },
  heliyon: {
    label: "Heliyon (2024), Cocoa by-products review",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11365323/",
  },
} as const;

export const stats: Stat[] = [
  {
    value: 800000,
    suffix: "+",
    label: "cocoa farm families in Ghana who can earn from their husks",
    sourceId: "usda",
  },
  {
    value: 70,
    suffix: "%",
    label: "of every cocoa pod is husk, usually left to rot or burned",
    sourceId: "heliyon",
  },
  {
    // Estimate: ~0.83 t CO₂e per tonne of husk left to rot or burn
    // (≈5M t CO₂e from 6M t unprocessed husk in Ghana, 2026 biochar
    // study) × a first target of 12,000 t of husk sold.
    value: 10000,
    unit: "tonnes",
    label: "of CO₂ emissions to be avoided by selling husks instead of burning them",
    estimate: true,
  },
  {
    // Estimate: ~600 kg beans per smallholder season → ~6 t fresh husk;
    // ~30 sacs sold at the app's GH₵40–50 per sac ≈ GH₵1,350.
    value: 1500,
    prefix: "GH₵ ",
    label: "average extra income per farmer, per season",
    estimate: true,
  },
];

// Ghanaian companies already turning cocoa pod husk into products
// (from the team's research). Not partners: shown as names, no logos.
// Logos are from each company's official website or public profile; add a logo here
// when one is available, otherwise the name shows as a wordmark.
// `height` and `shift` (in em of the row's font size) line each logo's
// main lettering up with the text names: same size, same centre line.
// Measured from where the lettering sits inside each logo image.
type Logo = { src: StaticImageData; height: number; shift: number };
// Companies with a logo first, then name-only ones.
export const huskCompanies: { name: string; logo?: Logo }[] = [
  { name: "NutriPodx", logo: { src: nutripodxLogo, height: 1.55, shift: -0.37 } },
  { name: "MorePlex", logo: { src: moreplexLogo, height: 1.8, shift: -0.12 } },
  { name: "Tachibana International Ghana", logo: { src: tachibanaLogo, height: 0.95, shift: 0 } },
  { name: "Adtech Agro", logo: { src: adtechLogo, height: 1.6, shift: 0.29 } },
  { name: "McHan Organics", logo: { src: mchanLogo, height: 1.7, shift: -0.19 } },
  { name: "Asaase Pa", logo: { src: asaasepaLogo, height: 1.35, shift: 0 } },
  { name: "Organic Potash Corporation", logo: { src: opcLogo, height: 1.45, shift: 0.22 } },
];
