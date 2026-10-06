"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  "Hmm, nothing here.",
  "Still not here!",
  "I've looked everywhere.",
  "Try the homepage 👇",
  "Maybe it got sold as Grade C?",
];

// A lost cocoa pod for the 404 page: bobs, blinks, its eyes follow the
// pointer, and tapping makes it jump and say something new.
export function LostPod() {
  const podRef = useRef<SVGSVGElement>(null);
  const [look, setLook] = useState({ x: 0, y: 0 });
  const [line, setLine] = useState(0);
  const [jumps, setJumps] = useState(0);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = podRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height * 0.42);
      const dist = Math.hypot(dx, dy) || 1;
      const max = 5; // how far pupils travel inside the eye
      setLook({ x: (dx / dist) * Math.min(max, dist / 30), y: (dy / dist) * Math.min(max, dist / 30) });
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
    };
  }, []);

  function poke() {
    setJumps((n) => n + 1);
    setLine((n) => (n + 1) % LINES.length);
  }

  return (
    <div className="relative mx-auto w-fit">
      {/* Speech bubble */}
      <p
        key={line}
        aria-live="polite"
        className="absolute -top-14 left-1/2 w-max -translate-x-1/2 animate-pop rounded-xl border border-line bg-surface-strong px-3 py-1.5 text-sm font-medium text-fg motion-reduce:animate-none"
      >
        {LINES[line]}
      </p>

      {/* Detection box like the scan demo */}
      <div className="relative border-2 border-[#4ade80] p-5">
        <span className="absolute -top-[22px] left-[-2px] whitespace-nowrap bg-[#4ade80] px-1.5 text-xs font-semibold leading-5 text-black">
          404 · page not found
        </span>

        <button
          type="button"
          onClick={poke}
          aria-label="Poke the lost cocoa pod"
          className="block cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
        >
          <span className="block animate-[bob_3s_ease-in-out_infinite] motion-reduce:animate-none">
            <svg
              key={jumps}
              ref={podRef}
              viewBox="0 0 120 170"
              className={`h-40 w-auto sm:h-48 ${jumps > 0 ? "animate-[hop_0.7s_ease-out] motion-reduce:animate-none" : ""}`}
              aria-hidden
            >
              {/* Stem */}
              <path d="M60 6 C 58 14, 62 18, 60 24" stroke="#5b3a26" strokeWidth="5" strokeLinecap="round" fill="none" />
              {/* Pod body */}
              <path d="M60 20 C 100 22, 112 80, 104 118 C 96 152, 76 166, 60 166 C 44 166, 24 152, 16 118 C 8 80, 20 22, 60 20 Z" fill="#e8a33a" />
              {/* Ridges */}
              {[38, 49, 71, 82].map((x) => (
                <path key={x} d={`M${x} 30 C ${x + (x - 60) * 0.35} 80, ${x + (x - 60) * 0.35} 120, ${x} 158`} stroke="#c9832a" strokeWidth="3" fill="none" strokeLinecap="round" />
              ))}
              {/* Spots */}
              <circle cx="32" cy="128" r="3" fill="#8a5a24" opacity="0.5" />
              <circle cx="90" cy="60" r="2.5" fill="#8a5a24" opacity="0.5" />

              {/* Eyes */}
              <g className="origin-[60px_72px] animate-[blink_4s_infinite] motion-reduce:animate-none">
                <ellipse cx="44" cy="72" rx="11" ry="13" fill="#fff" />
                <ellipse cx="76" cy="72" rx="11" ry="13" fill="#fff" />
                <circle cx={44 + look.x} cy={74 + look.y} r="5.5" fill="#2b2118" />
                <circle cx={76 + look.x} cy={74 + look.y} r="5.5" fill="#2b2118" />
                <circle cx={46 + look.x} cy={72 + look.y} r="1.6" fill="#fff" />
                <circle cx={78 + look.x} cy={72 + look.y} r="1.6" fill="#fff" />
              </g>
              {/* Worried brows (raised in the middle) + small mouth */}
              <path d="M34 59 L 52 53" stroke="#5b3a26" strokeWidth="3" strokeLinecap="round" />
              <path d="M86 59 L 68 53" stroke="#5b3a26" strokeWidth="3" strokeLinecap="round" />
              <path d="M52 104 Q 60 98 68 104" stroke="#5b3a26" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-fg-muted">Tap the pod</p>
    </div>
  );
}
