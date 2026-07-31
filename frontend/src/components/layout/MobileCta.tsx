import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig, whatsappLink } from "@/data/site";

/** Sticky bottom CTA bar — mobile only. Call + WhatsApp always one tap away. */
export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-arena-green/25 bg-black/95 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={`tel:${siteConfig.phone}`}
          data-wa-label="mobile-call"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-3 text-sm font-bold text-white active:scale-95"
        >
          <Phone className="h-4 w-4 text-arena-green" /> Call Now
        </a>
        <a
          href={whatsappLink("Hi KAKX Arena! I want to book a slot.")}
          target="_blank"
          rel="noreferrer"
          data-wa-label="mobile-whatsapp"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-arena-green to-arena-mint py-3 text-sm font-bold text-black active:scale-95"
        >
          <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
        </a>
      </div>
    </div>
  );
}
