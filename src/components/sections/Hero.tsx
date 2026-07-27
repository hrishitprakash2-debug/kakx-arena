"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Star, Clock, MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop&q=80" alt="Sports facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/20 border border-green-500/30 text-green-400 text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {siteConfig.openHours}
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4">
          <span className="text-white">KAKX</span>{" "}
          <span className="text-green-400">ARENA</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-xl sm:text-2xl md:text-3xl font-light text-white/80 mb-8">
          {siteConfig.tagline}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 text-sm text-white/60">
          <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> {siteConfig.rating} ({siteConfig.reviews} reviews)</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Wave City, Ghaziabad</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {siteConfig.openHours}</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => scrollTo("booking")} className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full text-base transition-all hover:shadow-lg hover:shadow-green-600/25">
            Book a Slot
          </button>
          <button onClick={() => scrollTo("sports")} className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold rounded-full text-base hover:bg-white/10 transition-colors">
            View Sports
          </button>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-white/40" />
      </motion.div>
    </section>
  );
}
