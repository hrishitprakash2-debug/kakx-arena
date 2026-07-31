"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import dynamic from "next/dynamic";
import { marqueeItems, siteConfig, whatsappLink } from "@/data/site";

const CricketBall = dynamic(() => import("@/components/three/CricketBall"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-40 w-40 animate-spinSlow rounded-full border-2 border-dashed border-arena-green/40" />
    </div>
  ),
});

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: "easeOut" as const },
  }),
};

/** letter-by-letter entrance for the display headline */
function StaggerTitle({ text, gradient }: { text: string; gradient?: boolean }) {
  const letters = text.split("");
  return (
    <span
      className={`inline-block ${gradient ? "text-gradient-green" : ""}`}
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ opacity: 0, y: 70, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.35 + i * 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 170]);
  const bgOpacity = useTransform(scrollY, [0, 600], [0.14, 0]);

  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-20">
      {/* background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-noise" />
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to bottom, black 30%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 95%)",
          }}
        />
      </motion.div>
      <div className="glow-blob left-[-10%] top-[-15%] h-[480px] w-[480px] bg-arena-green/25" />
      <div className="glow-blob bottom-[-20%] right-[-8%] h-[420px] w-[420px] bg-arena-lime/15" />

      <div className="container-x relative grid min-h-[calc(100vh-5rem)] items-center gap-8 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
        {/* text column */}
        <div className="relative z-10">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-arena-mint text-arena-mint" />
              {siteConfig.rating} · {siteConfig.reviews} Google Reviews
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-arena-green/40 bg-arena-green/10 px-4 py-1.5 text-xs font-semibold text-arena-green">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-arena-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-arena-green" />
              </span>
              Open 24 Hours
            </span>
          </motion.div>

          <h1 className="display-title text-[19vw] leading-[0.9] sm:text-8xl md:text-9xl">
            <StaggerTitle text="KAKX" />
            <span className="block">
              <StaggerTitle text="ARENA" gradient />
            </span>
          </h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display mt-3 text-2xl uppercase tracking-[0.25em] text-zinc-300 sm:text-3xl"
          >
            Fuel Your Play ⚡
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Wave City&apos;s premium sports destination —{" "}
            <span className="font-semibold text-white">Box Cricket</span>,{" "}
            <span className="font-semibold text-white">Badminton</span>,{" "}
            <span className="font-semibold text-white">Pickleball</span> — plus a pro{" "}
            <span className="font-semibold text-white">Academy</span> with cricket & badminton
            coaching. Floodlit nights, open 24 hours.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={whatsappLink("Hi KAKX Arena! I want to book a slot.")}
              data-wa-label="hero-book"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Book Your Slot <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#sports" className="btn-ghost">
              Explore Sports
            </a>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-col gap-3 text-sm text-zinc-400 sm:flex-row sm:items-center sm:gap-8"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-arena-green" /> {siteConfig.address}
            </span>
            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 transition-colors hover:text-arena-green">
              <Phone className="h-4 w-4 text-arena-green" /> {siteConfig.phoneDisplay}
            </a>
          </motion.div>
        </div>

        {/* 3D column — same ball on every screen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" as const }}
          className="relative z-0 h-[300px] sm:h-[420px] lg:h-[560px]"
        >
          <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 animate-pulseGlow rounded-full bg-arena-green/20 blur-[100px]" />
          <CricketBall />
        </motion.div>
      </div>

      {/* marquee strip */}
      <div className="relative z-10 -rotate-1 border-y-4 border-black bg-gradient-to-r from-arena-green via-arena-lime to-arena-green py-3.5 shadow-[0_0_60px_rgba(163,230,53,0.35)]">
        <div className="marquee-track flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-8 font-display text-lg uppercase tracking-[0.2em] text-black">
              {item}
              <span className="text-black/50">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
