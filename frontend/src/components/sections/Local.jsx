import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
const areas = [
  "Wave City",
  "Raj Nagar",
  "Raj Nagar Extension",
  "Indirapuram",
  "Vaishali",
  "Kaushambi",
  "Crossings Republik",
  "Mohan Nagar",
  "Dasna",
  "Sahibabad",
];
function Local() {
  return (
    <section
      id="local"
      className="section-pad relative overflow-hidden bg-arena-panel"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="glow-blob left-[-10%] top-[-20%] h-[360px] w-[360px] bg-arena-green/10" />
      <div className="container-x relative max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Serving Ghaziabad & NCR
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="display-title mt-4 text-5xl sm:text-6xl"
        >
          Ghaziabad&apos;s Home Of{" "}
          <span className="text-gradient-green">Live Sport</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base"
        >
          Based in Sector-11, Wave City, KAKX Arena is the go-to venue for{" "}
          <span className="font-semibold text-white">
            box cricket in Ghaziabad
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            cricket & badminton coaching
          </span>
          , <span className="font-semibold text-white">badminton courts</span>{" "}
          and{" "}
          <span className="font-semibold text-white">
            pickleball near Wave City
          </span>{" "}
          — open 24 hours with floodlit courts, pro coaching and easy parking.
          Just minutes from Raj Nagar Extension, Indirapuram, Vaishali and
          Dasna.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-2.5"
        >
          {areas.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-zinc-300 transition-colors hover:border-arena-green/50 hover:text-arena-green"
            >
              <MapPin className="h-3 w-3 text-arena-green/70" /> {a}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export { Local as default };
