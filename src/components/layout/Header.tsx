"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { id: "sports", label: "Sports" },
  { id: "booking", label: "Book Now" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        <a href="#" className="font-bold text-xl tracking-tight text-green-400">{siteConfig.name}</a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-white/70 hover:text-green-400 transition-colors">{l.label}</button>
          ))}
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-500 transition-colors">
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
        <button className="md:hidden text-white/80" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl">
            <div className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-white/70 hover:text-green-400 py-2">{l.label}</button>
              ))}
              <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white font-semibold rounded-full">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
