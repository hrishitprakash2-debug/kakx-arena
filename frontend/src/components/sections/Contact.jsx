import { motion } from "framer-motion";
import { Clock, Globe, MapPin, Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";

// TODO: Replace with your Formspree form ID — sign up free at https://formspree.io

const cards = [
  {
    icon: MapPin,
    title: "Find Us",
    lines: [siteConfig.address],
    href: siteConfig.mapsLink,
    cta: "Get Directions",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [siteConfig.phoneDisplay, "Bookings & enquiries"],
    href: `tel:${siteConfig.phone}`,
    cta: "Call Now",
  },
  {
    icon: Clock,
    title: "Open Hours",
    lines: ["Open 24 Hours", "7 days a week"],
  },
  {
    icon: Globe,
    title: "Online",
    lines: [`@kakx.arena`, siteConfig.website],
    href: siteConfig.instagram,
    cta: "Follow Us",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden bg-arena-panel"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="glow-blob right-[-10%] top-[-10%] h-[400px] w-[400px] bg-arena-green/12" />
      <div className="container-x relative">
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-title mt-4 text-5xl sm:text-6xl lg:text-7xl"
          >
            Come <span className="text-gradient-green">Play</span>
          </motion.h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* info cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.08 * i,
                  ease: "easeOut",
                }}
                className="flex flex-col rounded-2xl border border-white/10 bg-arena-card p-6 transition-colors duration-300 hover:border-arena-mint/40"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-arena-mint/20 to-arena-mint/10 text-arena-mint">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                  {c.title}
                </h3>
                {c.lines.map((l) => (
                  <p
                    key={l}
                    className="mt-1 text-sm leading-relaxed text-zinc-400"
                  >
                    {l}
                  </p>
                ))}
                {c.href && (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto pt-4 text-xs font-bold uppercase tracking-wider text-arena-green hover:underline"
                  >
                    {c.cta} →
                  </a>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="flex items-center justify-center gap-4 rounded-2xl border border-arena-mint/30 bg-gradient-to-r from-arena-mint/15 to-arena-mint/10 p-6 max-[360px]:hidden sm:col-span-2"
            >
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi KAKX Arena! I have a question.")}`}
                data-wa-label="contact-chat"
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost w-full"
              >
                <InstagramIcon className="h-5 w-5" /> Instagram
              </a>
            </motion.div>
          </div>
          {/* map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10"
          >
            <iframe
              src={siteConfig.mapsEmbed}
              title="KAKX Arena location map"
              className="map-frame absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={siteConfig.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-4 rounded-full bg-black/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition-colors hover:text-arena-green"
            >
              📍 Open in Google Maps
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
export { Contact as default };
