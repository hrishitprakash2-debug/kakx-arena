import { useEffect } from "react";
import { trackWhatsApp } from "@/lib/analytics";
function Analytics() {
  useEffect(() => {
    const env = import.meta.env ?? {};
    const gaId = env.VITE_GA_ID;
    if (gaId) {
      const w = window;
      w.dataLayer = w.dataLayer || [];
      w.gtag = function gtag() {
        w.dataLayer.push(arguments);
      };
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(s);
      w.gtag("js", /* @__PURE__ */ new Date());
      w.gtag("config", gaId);
    }
    const onClick = (e) => {
      const anchor = e.target.closest?.('a[href*="wa.me"]');
      if (anchor) {
        trackWhatsApp(anchor.getAttribute("data-wa-label") || "generic");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
export { Analytics as default };
