"use client";

import { motion } from "framer-motion";
import { Check, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import { whatsappLink } from "@/data/site";

const features = [
  { icon: Target, title: "Bowling Machine", desc: "Face real match-speed deliveries and sharpen your timing." },
  { icon: TrendingUp, title: "Pro Coaching", desc: "Certified coaches for batting, bowling, fielding & fitness." },
  { icon: Check, title: "Structured Programs", desc: "Beginner to advanced — weekly drills, nets and match practice." },
];

export default function Academy() {
  return (
    <section id="academy" className="relative overflow-hidden bg-arena-panel">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="glow-blob left-[-12%] top-[-20%] h-[460px] w-[460px] bg-arena-gold/15" />
      <div className="glow-blob bottom-[-25%] right-[-10%] h-[380px] w-[380px] bg-arena-orange/10" />

      <div className="container-x relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        {/* image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-arena-gold/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-arena-gold/25">
            <Image
              src="/images/g3.jpg"
              alt="KAKX Cricket Academy training"
              width={1280}
              height={720}
              className="h-[320px] w-full object-cover sm:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-md">
              <div>
                <p className="font-display text-2xl uppercase tracking-wide text-arena-gold">KAKX Academy</p>
                <p className="text-xs text-zinc-400">Train. Improve. Compete.</p>
              </div>
              <span className="rounded-full bg-arena-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-arena-gold">
                Now Enrolling
              </span>
            </div>
          </div>
        </motion.div>

        {/* text side */}
        <div className="order-1 lg:order-2">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow !border-arena-gold/40 !bg-arena-gold/10 !text-arena-gold"
          >
            Cricket Academy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-title mt-4 text-5xl sm:text-6xl lg:text-7xl"
          >
            Train Like <span className="text-arena-gold">A Pro</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400"
          >
            Our cricket academy pairs professional coaching with a bowling machine and
            structured drills — whether you&apos;re starting from zero or fine-tuning for
            match day.
          </motion.p>

          <div className="mt-8 space-y-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 * i + 0.2, ease: "easeOut" as const }}
                className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-arena-gold/25 to-arena-orange/15 text-arena-gold">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-0.5 text-sm text-zinc-400">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={whatsappLink("Hi KAKX Arena! I want to join the Cricket Academy. Please share program details and timings.")}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !from-arena-gold !to-arena-amber"
            >
              Join the Academy
            </a>
            <a href="#booking" className="btn-ghost">
              Book a Trial
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
