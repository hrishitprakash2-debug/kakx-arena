"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { stats } from "@/data/site";

function Counter({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = v.toFixed(decimals) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative border-b border-white/5 bg-arena-panel">
      <div className="container-x grid grid-cols-2 gap-y-10 py-12 sm:py-16 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1.5 text-center">
            <span className="font-display text-5xl tracking-wide text-gradient-orange sm:text-6xl">
              <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
