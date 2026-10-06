import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 is used for photos shown zoomed in (scan demo).
    qualities: [75, 90],
  },
};

export default nextConfig;
