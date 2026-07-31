/** Push WhatsApp CTA clicks into dataLayer + gtag (GA4) for conversion tracking. */
export function trackWhatsApp(label: string) {
  try {
    const w = window as unknown as {
      dataLayer?: Record<string, unknown>[];
      gtag?: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "whatsapp_click", label });
    if (typeof w.gtag === "function") {
      w.gtag("event", "whatsapp_click", { label });
    }
  } catch {
    /* tracking must never break the UI */
  }
}
