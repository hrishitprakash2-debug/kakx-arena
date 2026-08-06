import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/site";
import Marquee from "@/components/ui/Marquee";
const heroCards = [
  {
    src: "/images/g1.webp",
    alt: "Box cricket action at KAKX Arena",
    tag: "Box Cricket",
    cta: "Box Cricket · ₹900–1500/hr",
    href: "#booking",
  },
  {
    src: "/images/g7.webp",
    alt: "7v7 football turf action at KAKX Arena",
    tag: "Football",
    cta: "7v7 Football · ₹450–600/session",
    href: "#booking",
  },
  {
    src: "/images/g5.webp",
    alt: "Indoor badminton court with KAKX branding",
    tag: "Badminton",
    cta: "Badminton · ₹200/hr",
    href: "#booking",
  },
  {
    src: "/images/g3.webp",
    alt: "Cricket academy training session",
    tag: "Academy",
    cta: "Join the Academy",
    href: whatsappLink(
      "Hi KAKX Arena! I want to join the Academy (cricket/badminton coaching). Please share program details and timings.",
    ),
  },
];
const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: "easeOut" },
  }),
};
function StaggerTitle({ text, gradient }) {
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
          {ch === " " ? "\xA0" : ch}
        </motion.span>
      ))}
    </span>
  );
}
function useIsMobile() {
  const [mobile, setMobile] = useState(
    () => window.matchMedia("(max-width: 640px)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = () => setMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return mobile;
}
function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 170]);
  const bgOpacity = useTransform(scrollY, [0, 600], [0.14, 0]);
  const isMobile = useIsMobile();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const cardCount = heroCards.length;
  // auto-advance carousel (pauses on hover); 3s on mobile, 4.2s on desktop
  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % cardCount),
      isMobile ? 3000 : 4200,
    );
    return () => clearInterval(t);
  }, [paused, cardCount, isMobile]);
  const offsetOf = (i) => {
    let d = ((i - active) % cardCount + cardCount) % cardCount;
    if (d > 1) d -= cardCount;
    return d;
  };
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-20">
      {/* background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* static fade overlay — cheaper than mask-image (keeps layer compositable) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0b0d]" />
      </motion.div>
      <div className="glow-blob left-[-10%] top-[-15%] h-[480px] w-[480px] bg-arena-green/25" />
      <div className="glow-blob bottom-[-20%] right-[-8%] h-[420px] w-[420px] bg-arena-lime/15" />
      <div className="container-x relative py-14 lg:grid lg:min-h-[calc(100vh-5rem)] lg:items-center lg:gap-4 lg:grid-cols-[1fr_1.2fr] max-lg:py-20">
        {/* text column */}
        <div className="relative z-10">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6 flex flex-wrap items-center gap-3"
          >
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
          <h1 className="display-title text-[clamp(3.2rem,19vw,9rem)] leading-[0.9] sm:text-8xl md:text-9xl">
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
            Fuel Your Play
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
            <span className="font-semibold text-white">Pickleball</span> — plus
            a pro <span className="font-semibold text-white">Academy</span> with
            cricket & badminton coaching. Floodlit nights, open 24 hours.
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
              <MapPin className="h-4 w-4 text-arena-green" />{" "}
              {siteConfig.address}
            </span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-arena-green"
            >
              <Phone className="h-4 w-4 text-arena-green" />{" "}
              {siteConfig.phoneDisplay}
            </a>
          </motion.div>
        </div>
        {/* coverflow carousel — desktop only; mobile gets a single static card below the text */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative z-0 h-[420px] overflow-hidden lg:h-[560px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 animate-pulseGlow rounded-full bg-arena-green/20 blur-[60px]" />
            {/* arrows */}
            <button
              onClick={() => setActive((a) => (a - 1 + cardCount) % cardCount)}
              aria-label="Previous"
              className="absolute left-0 top-1/2 z-40 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition-colors hover:border-arena-green/60 hover:text-arena-green"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActive((a) => (a + 1) % cardCount)}
              aria-label="Next"
              className="absolute right-0 top-1/2 z-40 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition-colors hover:border-arena-green/60 hover:text-arena-green"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            {/* cards */}
            <div className="absolute inset-0">
              {heroCards.map((card, i) => {
                const offset = offsetOf(i);
                const isCenter = offset === 0;
                return (
                  <motion.button
                    key={card.tag}
                    onClick={() => {
                      if (!isCenter) {
                        setActive(i);
                        return;
                      }
                      if (card.href.startsWith("#")) {
                        document
                          .querySelector(card.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.open(card.href, "_blank");
                      }
                    }}
                    animate={{
                      x: `${offset * 18}%`,
                      y: "-50%",
                      scale: isCenter ? 1 : 0.82,
                      opacity: isCenter ? 1 : 0.45,
                      rotate: offset === -1 ? -6 : offset === 1 ? 6 : 0,
                      zIndex: isCenter ? 30 : 10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 28,
                    }}
                    className="group absolute inset-x-0 top-1/2 mx-auto h-[86%] w-[55%] max-w-[360px] overflow-hidden rounded-[2rem] border border-arena-green/30 text-left shadow-[0_0_60px_rgba(16,185,129,0.3)]"
                    aria-label={card.alt}
                  >
                    <img
                      src={card.src}
                      alt={card.alt}
                      loading="eager"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* bottom scrim for chip legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-arena-green backdrop-blur">
                      {card.tag}
                    </span>
                    <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-arena-mint px-4 py-2 text-xs font-bold uppercase tracking-wider text-black">
                      {card.cta}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
        {/* mobile card — cycles through all carousel cards every 3s */}
        {isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="relative z-0 mt-10 h-[260px] sm:hidden"
          >
            <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 animate-pulseGlow rounded-full bg-arena-green/20 blur-[50px]" />
            <AnimatePresence mode="popLayout">
              <motion.a
                key={heroCards[active].tag}
                href={heroCards[active].href}
                onClick={(e) => {
                  if (heroCards[active].href.startsWith("#")) {
                    e.preventDefault();
                    document
                      .querySelector(heroCards[active].href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                target={
                  heroCards[active].href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  heroCards[active].href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.03 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="group relative block h-full w-full overflow-hidden rounded-[1.75rem] border border-arena-green/30 shadow-[0_0_50px_rgba(16,185,129,0.25)]"
              >
                <img
                  src={heroCards[active].src}
                  alt={heroCards[active].alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-arena-green">
                  {heroCards[active].tag}
                </span>
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-arena-mint px-4 py-2 text-xs font-bold uppercase tracking-wider text-black">
                  {heroCards[active].cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </motion.a>
            </AnimatePresence>
          </motion.div>
        )}
      </div>
      {/* marquee ribbon — straight bordered strip, experiment-style */}
      <Marquee variant="display" />
    </section>
  );
}
export { Hero as default };
