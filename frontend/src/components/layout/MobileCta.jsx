import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig, whatsappLink } from "@/data/site";
function MobileCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-arena-green/25 bg-black/95 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={`tel:${siteConfig.phone}`}
          data-wa-label="mobile-call"
          className="inline-flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-3 py-2.5 text-xs font-bold text-white active:scale-95"
        >
          <Phone className="h-3.5 w-3.5 shrink-0 text-arena-green" /> Call Now
        </a>
        <a
          href={whatsappLink("Hi KAKX Arena! I want to book a slot.")}
          target="_blank"
          rel="noreferrer"
          data-wa-label="mobile-whatsapp"
          className="inline-flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-arena-mint px-3 py-2.5 text-xs font-bold text-black active:scale-95"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" /> Book on WhatsApp
        </a>
      </div>
    </div>
  );
}
export { MobileCta as default };
