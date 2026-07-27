"use client";
import { siteConfig } from "@/data/site";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.04] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="font-bold text-xl text-green-400 mb-3">{siteConfig.name}</h3>
            <p className="text-white/40 text-sm">{siteConfig.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><a href="#sports" className="hover:text-green-400 transition-colors">Sports</a></li>
              <li><a href="#booking" className="hover:text-green-400 transition-colors">Book Now</a></li>
              <li><a href="#gallery" className="hover:text-green-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-white/40">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-green-400 transition-colors"><Phone className="w-4 h-4" /> {siteConfig.phone}</a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} className="flex items-center gap-2 hover:text-green-400 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> {siteConfig.address}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.04] pt-8 text-center">
          <p className="text-white/20 text-xs">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
