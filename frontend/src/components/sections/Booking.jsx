import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Phone,
} from "lucide-react";
import { sports, timeSlots } from "@/data/site";
const STEPS = ["Sport", "Date & Time", "Details"];
function nextDays(n) {
  const out = [];
  const now = /* @__PURE__ */ new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    out.push({
      label:
        i === 0
          ? "Today"
          : i === 1
            ? "Tomorrow"
            : d.toLocaleDateString("en-IN", { weekday: "short" }),
      full: d.toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
      iso: d.toISOString().slice(0, 10),
    });
  }
  return out;
}
function Booking() {
  const [step, setStep] = useState(0);
  const [sport, setSport] = useState("box-cricket");
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [name, setName] = useState("");
  const days = useMemo(() => nextDays(7), []);
  const selectedSport = sports.find((s) => s.id === sport);
  const message = `Hi KAKX Arena! I want to book a slot.%0A%0ASport: ${selectedSport?.name ?? ""}%0ADate: ${date ?? ""}%0ATime: ${slot ?? ""}%0AName: ${name || "\u2014"}`;
  const waLink = `https://wa.me/918375060708?text=${message}`;
  const canNext =
    (step === 0 && !!sport) || (step === 1 && !!date && !!slot) || step === 2;
  const logBookingToApi = () => {
    const env = import.meta.env ?? {};
    const apiBase = env.VITE_API_URL;
    if (!apiBase || !selectedSport || !date || !slot) return;
    fetch(`${apiBase}/api/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sport: selectedSport.name,
        date,
        slot,
        name,
      }),
    }).catch(() => {});
  };
  const next = () => setStep((s) => Math.min(s + 1, 2));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  return (
    <section id="booking" className="section-pad relative overflow-hidden">
      <div className="glow-blob left-1/2 top-[-10%] h-[420px] w-[620px] -translate-x-1/2 bg-arena-green/12" />
      <div className="container-x relative max-w-4xl">
        <div className="mb-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Book in 30 Seconds
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-title mt-4 text-5xl sm:text-6xl lg:text-7xl"
          >
            Reserve Your <span className="text-gradient-green">Slot</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400"
          >
            Pick your sport, date and time — your booking goes straight to our
            WhatsApp. We confirm within minutes.
          </motion.p>
        </div>
        {/* progress steps */}
        <div className="mb-8 flex items-center justify-center gap-2 sm:gap-4">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${i < step ? "bg-arena-green text-black" : i === step ? "border-2 border-arena-green text-arena-green" : "border border-white/15 text-zinc-500"}`}
                >
                  {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </span>
                <span
                  className={`hidden text-xs font-semibold uppercase tracking-wider sm:block ${i <= step ? "text-white" : "text-zinc-500"}`}
                >
                  {s}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <span
                  className={`h-px w-8 sm:w-14 ${i < step ? "bg-arena-green" : "bg-white/10"}`}
                />
              )}
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-arena-card p-6 sm:p-9"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-arena-mint via-arena-green to-arena-mint" />
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="s0"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-4"
              >
                {sports.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSport(s.id);
                      next();
                    }}
                    className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-300 hover:-translate-y-1 ${sport === s.id ? "border-arena-green bg-arena-green/15 shadow-[0_0_30px_rgba(16,185,129,0.25)]" : "border-white/10 bg-white/[0.03] hover:border-white/25"}`}
                  >
                    <span className="text-xs font-bold text-white">
                      {s.name}
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      ₹{s.price}
                      {s.unit}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {selectedSport && (
                  <p className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="uppercase tracking-wider text-zinc-500">
                      Booking
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-arena-green/40 bg-arena-green/10 px-3 py-1 font-bold uppercase tracking-wider text-arena-green">
                      {selectedSport.name} · ₹{selectedSport.price}
                      {selectedSport.unit}
                    </span>
                    <button
                      onClick={() => setStep(0)}
                      className="text-zinc-500 underline-offset-2 transition-colors hover:text-white hover:underline"
                    >
                      Change
                    </button>
                  </p>
                )}
                <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  <CalendarDays className="h-4 w-4 text-arena-green" /> Pick a
                  date
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {days.map((d) => (
                    <button
                      key={d.iso}
                      onClick={() => setDate(d.full)}
                      className={`flex min-w-[74px] shrink-0 flex-col items-center rounded-xl border px-3 py-3 transition-all duration-300 ${date === d.full ? "border-arena-green bg-arena-green/15 text-white" : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/25"}`}
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                        {d.label}
                      </span>
                      <span className="mt-1 text-sm font-bold">{d.full}</span>
                    </button>
                  ))}
                </div>
                <p className="mb-3 mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  <Clock className="h-4 w-4 text-arena-green" /> Pick a time
                </p>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSlot(t)}
                      className={`rounded-lg border py-2.5 text-xs font-semibold transition-all duration-200 ${slot === t ? "border-arena-green bg-arena-green text-black" : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/30"}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Your name <span className="text-zinc-600">(optional)</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rohit"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:border-arena-green focus:outline-none"
                />
                <div className="mt-5 rounded-xl border border-arena-green/20 bg-arena-green/[0.07] p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-arena-green">
                    Booking Summary
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">
                    {selectedSport?.name} · ₹{selectedSport?.price}
                    {selectedSport?.unit} — {date} at {slot}
                  </p>
                </div>
                <a
                  href={waLink}
                  data-wa-label="booking-confirm"
                  target="_blank"
                  rel="noreferrer"
                  onClick={logBookingToApi}
                  className="btn-primary mt-6 w-full !py-4"
                >
                  Confirm on WhatsApp <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-center text-xs text-zinc-500">
                  Opens WhatsApp with your booking details pre-filled — or call{" "}
                  <a
                    href="tel:+918375060708"
                    className="text-arena-green hover:underline"
                  >
                    083750 60708
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">
            <button
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition-colors hover:text-white disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            {step < 2 && (
              <button
                onClick={next}
                disabled={!canNext}
                className="btn-ghost !py-2.5 !text-xs disabled:pointer-events-none disabled:opacity-30"
              >
                Continue <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
            {step === 2 && (
              <a
                href={`tel:+918375060708`}
                className="btn-ghost !py-2.5 !text-xs"
              >
                <Phone className="h-3.5 w-3.5" /> Call Instead
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export { Booking as default };
