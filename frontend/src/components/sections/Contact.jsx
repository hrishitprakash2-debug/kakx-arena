import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Globe, MapPin, Phone, Send } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";

// TODO: Replace with your Formspree form ID — sign up free at https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

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

function InquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", sport: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `KAKX Arena Inquiry — ${form.sport || "General"}`,
          name: form.name,
          phone: form.phone,
          sport: form.sport,
          message: form.message,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-arena-green/30 bg-arena-green/10 p-10 text-center"
      >
        <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-arena-green/20 text-arena-green">
          <Send className="h-6 w-6" />
        </span>
        <h3 className="font-display text-2xl uppercase tracking-wide text-white">Message Sent!</h3>
        <p className="mt-2 text-sm text-zinc-400">We'll get back to you within a few hours.</p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", sport: "", message: "" }); }}
          className="mt-6 text-xs font-bold uppercase tracking-wider text-arena-green hover:underline"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-arena-card p-6 sm:p-8"
    >
      <h3 className="font-display text-2xl uppercase tracking-wide text-white mb-1">Send an Inquiry</h3>
      <p className="text-sm text-zinc-500 mb-6">Fill in the details and we'll reach out to you.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-arena-green/50"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-arena-green/50"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="sport" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500">Interested In</label>
        <select
          id="sport"
          name="sport"
          value={form.sport}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-arena-green/50"
        >
          <option value="" className="bg-black">Select a sport</option>
          <option value="Box Cricket" className="bg-black">Box Cricket</option>
          <option value="7v7 Football" className="bg-black">7v7 Football</option>
          <option value="Badminton" className="bg-black">Badminton</option>
          <option value="Pickleball" className="bg-black">Pickleball</option>
          <option value="Academy" className="bg-black">Academy (Cricket/Badminton/Football)</option>
          <option value="Corporate/Event" className="bg-black">Corporate / Event Booking</option>
          <option value="General" className="bg-black">General Inquiry</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-500">Message</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Any specific requirements or questions..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-arena-green/50 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-arena-mint px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:brightness-110 disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : <><Send className="h-4 w-4" /> Send Inquiry</>}
      </button>
      {status === "error" && (
        <p className="mt-3 text-xs text-red-400">Something went wrong. Please try again or message us on WhatsApp.</p>
      )}
    </motion.form>
  );
}

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

        {/* Inquiry Form — full width below the grid */}
        <div className="mt-12">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
export { Contact as default };
