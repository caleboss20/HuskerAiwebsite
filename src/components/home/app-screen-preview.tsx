// Stand-in for the real app screenshot. Swap for an <Image> once we
// have one. Hidden from assistive tech: it is decoration, the hero
// text carries the message.
export function AppScreenPreview() {
  return (
    <div aria-hidden className="flex h-full flex-col bg-slate-50 text-ink-900">
      {/* Header band */}
      <div className="bg-gradient-to-br from-brand-700 to-ink-800 px-4 pb-14 pt-11 text-white">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold">Husker AI</span>
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px]">Offline ready</span>
        </div>
      </div>

      <div className="-mt-10 flex flex-1 flex-col gap-3 px-3 pb-3">
        <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5">
          <p className="text-[10px] text-slate-500">Today&apos;s scan</p>
          <p className="mt-0.5 text-xl font-bold tracking-tight">85 kg husks</p>
          <div className="mt-3 grid grid-cols-3 gap-1.5 text-center text-[9px] text-slate-600">
            {["Scan", "Value", "Sell"].map((label) => (
              <div key={label} className="rounded-lg bg-slate-100 py-1.5">{label}</div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-brand-600 py-2 text-center text-[11px] font-semibold text-white">
            Scan husks
          </div>
        </div>

        <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5">
          <div className="flex justify-between text-[11px]">
            <span className="font-semibold">Last scan</span>
            <span className="text-brand-600">Good quality</span>
          </div>
          <div className="mt-2.5 space-y-2">
            {[
              ["Quantity", "85 kg"],
              ["Moisture", "Low"],
              ["Est. value", "GH₵ —"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between text-[10px]">
                <span className="text-slate-500">{k}</span>
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5">
          <p className="text-[11px] font-semibold">Buyers nearby</p>
          {["Kumasi Feed Co.", "Agro Potash Ltd."].map((name) => (
            <div key={name} className="mt-2 flex items-center gap-2 text-[10px]">
              <span className="size-5 rounded-full bg-slate-200" />
              <span className="flex-1">{name}</span>
              <span className="text-brand-600">Offer</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
