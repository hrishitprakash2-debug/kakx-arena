"use client";
import { motion } from "framer-motion";
import { sports } from "@/data/site";
import { ArrowRight } from "lucide-react";

export default function Sports() {
  return (
    <section id="sports" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-green-400 text-xs tracking-[0.3em] uppercase mb-3">
            Our Facilities
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Choose Your <span className="text-green-400">Sport</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {sports.map((sport, i) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={sport.image} alt={sport.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent" />
                <div className="absolute top-3 right-3 text-3xl">{sport.icon}</div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-white mb-1">{sport.name}</h3>
                <p className="text-white/40 text-xs mb-3">{sport.surface} • {sport.facilities} {sport.facilities > 1 ? "courts" : "court"}</p>
                <p className="text-white/50 text-sm mb-4 line-clamp-2">{sport.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-bold">₹{sport.price} <span className="text-white/40 text-xs font-normal">onwards</span></span>
                  <button className="text-green-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Book <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
