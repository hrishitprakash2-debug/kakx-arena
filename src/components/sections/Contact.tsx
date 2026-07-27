"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-green-400 text-xs tracking-[0.3em] uppercase mb-3">
            Find Us
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Visit <span className="text-green-400">KAKX Arena</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-4">
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3"><MapPin className="w-5 h-5 text-green-400" /><h3 className="text-white font-semibold">Address</h3></div>
              <p className="text-white/50 text-sm leading-relaxed">{siteConfig.address}</p>
              <a href={siteConfig.googleMaps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-400 text-sm mt-3 hover:text-green-300 transition-colors">
                Open in Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3"><Clock className="w-5 h-5 text-green-400" /><h3 className="text-white font-semibold">Hours</h3></div>
              <p className="text-green-400 font-semibold text-sm">{siteConfig.openHours}</p>
              <div className="flex items-center gap-2 mt-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /><span className="text-green-400/70 text-xs">Open now</span></div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3"><Phone className="w-5 h-5 text-green-400" /><h3 className="text-white font-semibold">Contact</h3></div>
              <div className="space-y-2">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-white/50 hover:text-green-400 transition-colors text-sm"><Phone className="w-4 h-4" /> {siteConfig.phone}</a>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-green-400 transition-colors text-sm"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/[0.06] min-h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.68!2d77.4538!3d28.6692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf5a43173357b%3A0x2c42e82de01011e0!2sWave+City%2C+Ghaziabad!5e0!3m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, minHeight: "400px" }} allowFullScreen loading="lazy" title="KAKX Arena Location" className="grayscale hover:grayscale-0 transition-all duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
