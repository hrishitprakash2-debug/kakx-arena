"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote, Star } from "lucide-react";
import { reviews, siteConfig } from "@/data/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function Reviews() {
  return (
    <section id="reviews" className="section-pad relative overflow-hidden">
      <div className="glow-blob left-[-8%] bottom-[-20%] h-[400px] w-[400px] bg-arena-gold/10" />
      <div className="container-x relative">
        <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Player Reviews
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="display-title mt-4 text-5xl sm:text-6xl lg:text-7xl"
            >
              Loved By <span className="text-gradient-orange">Players</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-5 rounded-2xl border border-arena-gold/25 bg-gradient-to-br from-arena-gold/10 to-transparent p-6"
          >
            <span className="font-display text-7xl tracking-wide text-gradient-orange">
              {siteConfig.rating}
            </span>
            <div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-arena-amber text-arena-amber" />
                ))}
              </div>
              <p className="mt-1.5 text-sm text-zinc-400">
                Based on {siteConfig.reviews}+ Google reviews
              </p>
              <a
                href={siteConfig.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-arena-orange hover:underline"
              >
                Read on Google <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {reviews.map((r) => (
            <motion.figure
              key={r.name}
              variants={item}
              className="card-sheen relative flex flex-col rounded-2xl border border-white/10 bg-arena-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-arena-orange/40"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-arena-orange/15" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-arena-amber text-arena-amber" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-arena-orange to-arena-amber font-display text-lg text-black">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{r.name}</p>
                  <p className="text-xs text-zinc-500">{r.tag}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
