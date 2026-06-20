"use client";

import { useRef, useEffect, useState } from "react";

interface CountStatProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function CountStat({ target, suffix = "", label, duration = 1600 }: CountStatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-1">
      <span className="font-display text-3xl font-extrabold leading-none text-kips-navy-900 lg:text-4xl tabular-nums">
        {value}{suffix}
      </span>
      <span className="text-[0.68rem] font-bold uppercase tracking-widest text-kips-navy-900/60">
        {label}
      </span>
    </div>
  );
}

const TEXT_STATS = [
  { label: "Board Certified", word: "Board" },
  { label: "Online Classes", word: "Online" },
];

export default function StatsBar() {
  return (
    <div className="bg-kips-yellow-500 py-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <CountStat target={12} suffix="+" label="Programs Offered" />
          <CountStat target={7} label="Branch Locations" />
          {TEXT_STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center gap-1">
              <span className="font-display text-3xl font-extrabold leading-none text-kips-navy-900 lg:text-4xl">
                {s.word}
              </span>
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-kips-navy-900/60">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
