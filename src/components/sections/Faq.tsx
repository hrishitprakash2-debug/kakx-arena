"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I book a slot?",
    a: "Pick your sport, date and time on this page, then hit Book — it opens WhatsApp with your details pre-filled. We confirm within minutes. No apps, no sign-ups.",
  },
  {
    q: "What are your timings?",
    a: "We're open 24 hours, 7 days a week. Night games under floodlights are our specialty.",
  },
  {
    q: "Do you provide equipment?",
    a: "Yes — balls, bats, rackets, pickleball paddles and kits are available for rent at the arena.",
  },
  {
    q: "Is there professional coaching?",
    a: "Yes — our academy offers certified coaching for both cricket (with a bowling machine and structured nets) and badminton (footwork, strokes and match play), from beginner to advanced.",
  },
  {
    q: "Can I host events, tournaments or corporate games?",
    a: "Absolutely. Corporate days, tournaments and group bookings are welcome — message us on WhatsApp for custom packages and pricing.",
  },
  {
    q: "What if I need to cancel or reschedule?",
    a: "Just message us on WhatsApp — we keep it flexible. Reschedule or cancel without any hassle.",
  },
  {
    q: "Where exactly is KAKX Arena?",
    a: "Sector-11, Wave City, Ghaziabad, Uttar Pradesh 201015 — with parking available at the venue.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad relative overflow-hidden">
      <div className="glow-blob right-[-10%] bottom-[-15%] h-[380px] w-[380px] bg-arena-mint/10" />
      <div className="container-x relative max-w-3xl">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Good To Know
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-title mt-4 text-5xl sm:text-6xl lg:text-7xl"
          >
            Questions? <span className="text-gradient-green">Answered.</span>
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i, ease: "easeOut" as const }}
                className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                  isOpen ? "border-arena-green/40 bg-arena-green/[0.06]" : "border-white/10 bg-arena-card"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-arena-green transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" as const }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400 sm:px-6">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
