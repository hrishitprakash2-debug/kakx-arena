import { motion } from "framer-motion";
import { Check, Feather, Target, TrendingUp } from "lucide-react";
import { whatsappLink } from "@/data/site";
const features = [
  {
    icon: Target,
    title: "Bowling Machine",
    desc: "Face real match-speed deliveries and sharpen your timing.",
  },
  {
    icon: Feather,
    title: "Badminton Coaching",
    desc: "Footwork, strokes and match play on our synthetic courts.",
  },
  {
    icon: TrendingUp,
    title: "Pro Coaches",
    desc: "Certified cricket & badminton coaches for every level.",
  },
  {
    icon: Check,
    title: "Structured Programs",
    desc: "Beginner to advanced \u2014 weekly drills, nets and match practice.",
  },
];
function Academy() {
  return (
    <section id="academy" className="relative overflow-hidden bg-arena-panel">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="glow-blob left-[-12%] top-[-20%] h-[460px] w-[460px] bg-arena-lime/15" />
      <div className="glow-blob bottom-[-25%] right-[-10%] h-[380px] w-[380px] bg-arena-green/10" />
      <div className="container-x relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        {/* image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-arena-lime/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-arena-lime/25">
            <img
              src="/images/g5.jpg"
              alt="KAKX Academy training session — cricket & badminton coaching"
              loading="lazy"
              className="h-[320px] w-full object-cover sm:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-md">
              <div>
                <p className="font-display text-2xl uppercase tracking-wide text-arena-lime">
                  KAKX Academy
                </p>
                <p className="text-xs text-zinc-400">
                  Train. Improve. Compete.
                </p>
              </div>
              <span className="rounded-full bg-arena-lime/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-arena-lime">
                Now Enrolling
              </span>
            </div>
          </div>
        </motion.div>
        {/* text side */}
        <div className="order-1 lg:order-2">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow !border-arena-lime/40 !bg-arena-lime/10 !text-arena-lime"
          >
            Pro Academy — Cricket & Badminton
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-title mt-4 text-5xl sm:text-6xl lg:text-7xl"
          >
            Train Like <span className="text-arena-lime">A Pro</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400"
          >
            KAKX Academy offers professional coaching for{" "}
            <span className="font-semibold text-white">cricket</span> and{" "}
            <span className="font-semibold text-white">badminton</span>.
            Cricketers train on the bowling machine with structured nets;
            badminton players build footwork, strokes and match play on our
            synthetic courts.
          </motion.p>
          <div className="mt-8 space-y-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.08 * i + 0.2,
                  ease: "easeOut",
                }}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-arena-green/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-arena-lime/25 to-arena-green/15 text-arena-lime">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-0.5 text-sm text-zinc-400">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={whatsappLink(
                "Hi KAKX Arena! I want to join the Academy (cricket/badminton coaching). Please share program details and timings.",
              )}
              data-wa-label="academy-join"
              target="_blank"
              rel="noreferrer"
              className="btn-primary !bg-arena-mint"
            >
              Join the Academy
            </a>
            <a href="#booking" className="btn-ghost">
              Book a Trial
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export { Academy as default };
