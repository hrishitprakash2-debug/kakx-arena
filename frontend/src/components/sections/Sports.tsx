import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { sports, whatsappLink } from "@/data/site";
import type { Sport } from "@/data/site";

const accentMap: Record<string, { glow: string; text: string; border: string }> = {
  orange: { glow: "group-hover:shadow-[0_20px_70px_-15px_rgba(163,230,53,0.45)]", text: "text-arena-green", border: "hover:border-arena-green/60" },
  gold: { glow: "group-hover:shadow-[0_20px_70px_-15px_rgba(201,242,74,0.45)]", text: "text-arena-lime", border: "hover:border-arena-lime/60" },
  green: { glow: "group-hover:shadow-[0_20px_70px_-15px_rgba(74,222,128,0.4)]", text: "text-emerald-400", border: "hover:border-emerald-400/60" },
  blue: { glow: "group-hover:shadow-[0_20px_70px_-15px_rgba(110,231,183,0.4)]", text: "text-emerald-300", border: "hover:border-emerald-300/60" },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

/** 3D tilt on mouse move — desktop only (pointer: fine). */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 8);
    rx.set(-py * 8);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="h-full [transform-style:preserve-3d]"
    >
      {children}
    </motion.div>
  );
}

function SportCard({ sport }: { sport: Sport }) {
  const a = accentMap[sport.accent] ?? accentMap.orange;
  return (
    <TiltCard>
      <article
        className={`group card-sheen relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-arena-card transition-all duration-500 hover:-translate-y-2 ${a.glow} ${a.border}`}
      >
        {sport.badge && (
          <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-arena-lime to-arena-mint px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-black">
            <Zap className="h-3 w-3" /> {sport.badge}
          </span>
        )}
        <div className="relative h-48 overflow-hidden">
          <img
            src={sport.image}
            alt={sport.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arena-card via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-2xl">{sport.emoji}</span>
            <span className="font-display text-3xl tracking-wide text-white">
              ₹{sport.price}
              <span className="text-base text-zinc-500"> {sport.unit}</span>
            </span>
          </div>
          <h3 className="font-display text-3xl uppercase tracking-wide text-white">
            {sport.name}
          </h3>
          <p className={`mt-0.5 text-xs font-semibold uppercase tracking-widest ${a.text}`}>
            {sport.surface}
          </p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{sport.tagline}</p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {sport.features.map((f) => (
              <li
                key={f}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-zinc-300"
              >
                {f}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(
              `Hi KAKX Arena! I want to book ${sport.name} (₹${sport.price}${sport.unit}). Please share available slots.`
            )}
            data-wa-label={`sport-${sport.id}`}
            target="_blank"
            rel="noreferrer"
            className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 group-hover:border-arena-green group-hover:bg-arena-green group-hover:text-black ${a.text}`}
          >
            Book Now <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </article>
    </TiltCard>
  );
}

export default function Sports() {
  return (
    <section id="sports" className="section-pad relative overflow-hidden">
      <div className="glow-blob right-[-10%] top-[10%] h-[400px] w-[400px] bg-arena-green/10" />
      <div className="container-x relative">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              What We Offer
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-title mt-4 text-5xl sm:text-6xl lg:text-7xl"
            >
              Pick Your <span className="text-gradient-green">Game</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-sm leading-relaxed text-zinc-400"
          >
            Every court, turf and net built for serious play. Transparent pricing —
            book directly on WhatsApp, no apps, no middlemen.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {sports.map((sport) => (
            <motion.div key={sport.id} variants={item} className="h-full">
              <SportCard sport={sport} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
