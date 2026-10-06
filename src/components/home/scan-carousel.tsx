"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ScanScene } from "@/content/how-it-works";

const FRAME_ASPECT = 2 / 3; // width / height of the portrait frame
const SCENE_MS = 5000;
const BOX_STEP_S = 0.3;

// Box layer matching where object-cover places the photo, so box % stay
// aligned with the photo whatever its aspect ratio.
function boxLayer(scene: ScanScene) {
  const imageAspect = scene.image.width / scene.image.height;
  if (imageAspect > FRAME_ASPECT) {
    const w = (imageAspect / FRAME_ASPECT) * 100;
    return { width: `${w}%`, height: "100%", left: `${-(w - 100) * scene.focus.x}%`, top: "0%" };
  }
  const h = (FRAME_ASPECT / imageAspect) * 100;
  return { width: "100%", height: `${h}%`, left: "0%", top: `${-(h - 100) * scene.focus.y}%` };
}

export function ScanCarousel({ scenes }: { scenes: ScanScene[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setActive((i) => (i + 1) % scenes.length), SCENE_MS);
    return () => clearTimeout(id);
  }, [active, scenes.length]);

  const scene = scenes[active];
  const counts = scene.detections.reduce<Record<string, number>>((acc, d) => {
    acc[d.grade] = (acc[d.grade] ?? 0) + 1;
    return acc;
  }, {});
  const summaryDelay = `${scene.detections.length * BOX_STEP_S + 0.3}s`;

  return (
    <div className="mx-auto w-full max-w-[440px] lg:mr-0">
      <figure className="relative aspect-[2/3] overflow-hidden rounded-3xl bg-ink-900">
        {scenes.map((s, i) => (
          <Image
            key={i}
            src={s.image}
            alt={s.alt}
            fill
            sizes="(min-width: 1024px) 440px, 100vw"
            placeholder="blur"
            aria-hidden={i !== active}
            className={`object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
            style={{ objectPosition: `${s.focus.x * 100}% ${s.focus.y * 100}%` }}
          />
        ))}

        {/* Viewfinder corners */}
        <div aria-hidden className="pointer-events-none absolute inset-4 sm:inset-5">
          {["left-0 top-0 border-l-2 border-t-2", "right-0 top-0 border-r-2 border-t-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((pos) => (
            <span key={pos} className={`absolute size-8 border-white/90 ${pos}`} />
          ))}
        </div>

        <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white">
          <span className="size-2 animate-pulse rounded-full bg-[#4ade80] motion-reduce:animate-none" />
          Scanning
        </div>

        {/* Boxes for the active scene; keyed so animations replay. */}
        <div key={`boxes-${active}`} aria-hidden className="absolute" style={boxLayer(scene)}>
          {scene.detections.map((d, i) => (
            <div
              key={i}
              className="absolute animate-pop border-2 border-[#4ade80] motion-reduce:animate-none"
              style={{
                left: `${d.x}%`,
                top: `${d.y}%`,
                width: `${d.w}%`,
                height: `${d.h}%`,
                animationDelay: `${0.5 + i * BOX_STEP_S}s`,
              }}
            >
              <span className="absolute -top-[18px] left-[-2px] whitespace-nowrap bg-[#4ade80] px-1 text-[10px] font-semibold leading-4 text-black">
                {d.grade} {d.score}%
              </span>
            </div>
          ))}
        </div>

        <figcaption
          key={`result-${active}`}
          className="absolute right-6 top-6 w-44 animate-pop rounded-xl bg-white p-3.5 text-[#1a1a1a] motion-reduce:animate-none"
          style={{ animationDelay: summaryDelay }}
        >
          <p className="text-[11px] font-medium text-neutral-500">Scan result</p>
          <div className="mt-0.5">
            <p className="font-display text-xl font-semibold">
              {scene.detections.length} {scene.detections.length === 1 ? "husk" : "husks"}
            </p>
            <p className="mt-1 text-xs text-neutral-700">
              <span className="text-neutral-500">Grade </span>
              {(["A", "B", "C"] as const).map((g, i) => (
                <span key={g}>
                  {i > 0 && " · "}
                  {g} <b>{counts[g] ?? 0}</b>
                </span>
              ))}
            </p>
          </div>
        </figcaption>
      </figure>

      <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Scan examples">
        {scenes.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show scan example ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-brand-600" : "w-3 bg-line hover:bg-fg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
}
