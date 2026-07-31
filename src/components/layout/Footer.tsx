"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig, sports, whatsappLink } from "@/data/site";

const Shuttlecock = dynamic(() => import("@/components/three/Shuttlecock"), {
  ssr: false,
  loading: () => null,
});

const quickLinks = [
  { href: "#sports", label: "Sports" },
  { href: "#academy", label: "Cricket Academy" },
  { href: "#booking", label: "Book a Slot" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      <div className="glow-blob left-1/2 top-[-60%] h-[380px] w-[640px] -translate-x-1/2 bg-arena-green/10" />

      {/* CTA banner */}
      <div className="container-x relative pt-20 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="relative overflow-hidden rounded-3xl border border-arena-green/30 bg-gradient-to-br from-arena-green/15 via-arena-card to-arena-card p-8 text-center sm:p-14"
        >
          <div className="absolute inset-0 bg-noise" />
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-arena-green to-transparent" />
          {/* 3D shuttlecock accents */}
          <div className="pointer-events-none absolute -right-4 top-1/2 hidden h-44 w-44 -translate-y-1/2 sm:block lg:right-10 lg:h-52 lg:w-52">
            <Shuttlecock />
          </div>
          <div className="pointer-events-none absolute -left-6 bottom-2 hidden h-28 w-28 -scale-x-100 sm:block lg:left-16">
            <Shuttlecock />
          </div>
          <p className="font-display relative text-6xl uppercase tracking-wide sm:text-8xl">
            Ready To <span className="text-gradient-green">Play?</span>
          </p>
          <p className="relative mx-auto mt-4 max-w-md text-sm text-zinc-400">
            Your turf, court or net is waiting. Book in 30 seconds on WhatsApp —
            we confirm within minutes.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink("Hi KAKX Arena! I want to book a slot.")}
              data-wa-label="footer-book"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Book Your Slot <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${siteConfig.phone}`} className="btn-ghost">
              <Phone className="h-4 w-4" /> {siteConfig.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>

      {/* links */}
      <div className="container-x relative grid gap-10 py-16 sm:py-20 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <a href="#top" className="flex items-baseline gap-1 font-display text-3xl tracking-wider">
            <span className="text-gradient-green">KAKX</span>
            <span className="text-white">ARENA</span>
          </a>
          <p className="mt-1 font-display text-lg uppercase tracking-[0.25em] text-zinc-500">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
            Wave City&apos;s premium sports destination — box cricket, cricket
            academy, badminton & pickleball. Open 24 hours.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all hover:border-arena-green hover:text-arena-green"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={whatsappLink("Hi KAKX Arena!")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all hover:border-arena-green hover:text-arena-green"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-arena-green">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Sports</h4>
          <ul className="mt-5 space-y-3">
            {sports.map((s) => (
              <li key={s.id}>
                <a href="#sports" className="text-sm text-zinc-400 transition-colors hover:text-arena-green">
                  {s.name} <span className="text-zinc-600">₹{s.price}{s.unit}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-zinc-400">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-arena-green" />
              {siteConfig.address}
            </li>
            <li>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 transition-colors hover:text-arena-green">
                <Phone className="h-4 w-4 shrink-0 text-arena-green" /> {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="text-zinc-500">Open 24 Hours · 7 Days</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} KAKX Arena. All rights reserved.</p>
          <p>
            Website by <span className="text-zinc-400">Hrishit Prakash</span> · Fuel Your Play ⚡
          </p>
        </div>
      </div>
    </footer>
  );
}
