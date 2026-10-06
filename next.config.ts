import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  // Hide the dev-only Next.js badge (errors still show).
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 is used for photos shown zoomed in (scan demo).
    qualities: [75, 90],
  },
};

export default nextConfig;
