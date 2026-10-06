import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default social share card for every page. A route can override it
// with its own opengraph-image file.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: siteConfig.themeColor,
          color: siteConfig.backgroundColor,
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 44, marginTop: 24, opacity: 0.85 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    size,
  );
}
