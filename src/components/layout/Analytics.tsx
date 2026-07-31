"use client";

import { useEffect } from "react";
import { trackWhatsApp } from "@/lib/analytics";

/**
 * GA4 loader — activates only when NEXT_PUBLIC_GA_ID is set (Vercel env).
 * Also delegates all wa.me link clicks to the tracker.
 */
export default function Analytics() {
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    if (gaId) {
      const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };
      w.dataLayer = w.dataLayer || [];
      w.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments);
      };
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(s);
      w.gtag("js", new Date());
      w.gtag("config", gaId);
    }

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.('a[href*="wa.me"]');
      if (anchor) {
        trackWhatsApp(
          (anchor as HTMLElement).getAttribute("data-wa-label") || "generic"
        );
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
