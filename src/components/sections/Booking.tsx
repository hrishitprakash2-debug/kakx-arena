"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sports, timeSlots } from "@/data/site";
import { Calendar, Clock, Users, Check, ChevronRight } from "lucide-react";

type Step = 1 | 2 | 3 | 4;

export default function Booking() {
  const [step, setStep] = useState<Step>(1);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sport = sports.find((s) => s.id === selectedSport);

  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    return d.toISOString().split("T")[0];
  });

  const handleSubmit = () => {
    if (name && phone && selectedSport && selectedDate && selectedSlot) {
      setSubmitted(true);
    }
  };

  const reset = () => {
    setStep(1);
    setSelectedSport(null);
    setSelectedDate("");
    setSelectedSlot(null);
    setName("");
    setPhone("");
    setSubmitted(false);
  };

  return (
    <section id="booking" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-stone-950">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-green-400 text-xs tracking-[0.3em] uppercase mb-3">
            Book Now
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Reserve Your <span className="text-green-400">Slot</span>
          </motion.h2>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s ? "bg-green-600 text-white" : "bg-white/10 text-white/30"}`}>
                {step > s ? <Check className="w-4 h-4" /> : s}
              </div>
              {s < 4 && <div className={`w-8 sm:w-16 h-0.5 ${step > s ? "bg-green-600" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 bg-white/[0.03] border border-green-500/20 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
              <p className="text-white/50 mb-6">
                {sport?.name} • {new Date(selectedDate).toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" })} • {selectedSlot}
              </p>
              <p className="text-white/30 text-sm mb-6">Confirmation sent to {phone}</p>
              <button onClick={reset} className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500 transition-colors">
                Book Another Slot
              </button>
            </motion.div>
          ) : (
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              {/* Step 1: Sport */}
              {step === 1 && (
                <div className="space-y-3">
                  <p className="text-white/50 text-sm mb-4">Choose your sport:</p>
                  {sports.map((s) => (
                    <button key={s.id} onClick={() => { setSelectedSport(s.id); setStep(2); }} className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${selectedSport === s.id ? "border-green-500 bg-green-500/10" : "border-white/10 bg-white/[0.03] hover:border-white/20"}`}>
                      <span className="text-2xl">{s.icon}</span>
                      <div className="text-left flex-1">
                        <p className="font-semibold text-white">{s.name}</p>
                        <p className="text-white/40 text-xs">{s.surface}</p>
                      </div>
                      <span className="text-green-400 font-bold">₹{s.price}</span>
                      <ChevronRight className="w-5 h-5 text-white/30" />
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Date */}
              {step === 2 && (
                <div>
                  <p className="text-white/50 text-sm mb-4">Select a date:</p>
                  <div className="grid grid-cols-7 gap-2">
                    {dates.map((d) => {
                      const date = new Date(d);
                      const isToday = d === today.toISOString().split("T")[0];
                      return (
                        <button key={d} onClick={() => { setSelectedDate(d); setStep(3); }} className={`flex flex-col items-center p-3 rounded-xl border transition-all ${selectedDate === d ? "border-green-500 bg-green-500/10" : "border-white/10 bg-white/[0.03] hover:border-white/20"}`}>
                          <span className="text-[10px] text-white/40 uppercase">{date.toLocaleDateString("en-IN", { weekday: "short" })}</span>
                          <span className={`text-lg font-bold ${isToday ? "text-green-400" : "text-white"}`}>{date.getDate()}</span>
                          <span className="text-[10px] text-white/40">{date.toLocaleDateString("en-IN", { month: "short" })}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Time Slot */}
              {step === 3 && (
                <div>
                  <p className="text-white/50 text-sm mb-4">Pick a time slot:</p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button key={slot} onClick={() => { setSelectedSlot(slot); setStep(4); }} className={`p-3 rounded-xl border text-sm font-medium transition-all ${selectedSlot === slot ? "border-green-500 bg-green-500/10 text-green-400" : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20"}`}>
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Details */}
              {step === 4 && (
                <div className="space-y-4">
                  <p className="text-white/50 text-sm mb-4">Your details:</p>
                  <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-xl">{sport?.icon}</span>
                      <div>
                        <p className="font-semibold text-white">{sport?.name}</p>
                        <p className="text-white/40">{new Date(selectedDate).toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" })} • {selectedSlot}</p>
                      </div>
                      <span className="ml-auto text-green-400 font-bold">₹{sport?.price}</span>
                    </div>
                  </div>
                  <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-green-500 transition-colors" />
                  <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-green-500 transition-colors" />
                  <button onClick={handleSubmit} disabled={!name || !phone} className="w-full py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                    Confirm Booking
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
