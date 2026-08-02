import { motion } from "framer-motion";

/** Lightweight CSS-only cricket ball — no WebGL, no GPU hit. Mobile hero replacement. */
export default function CricketBallStatic() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* glow */}
      <div className="absolute h-[260px] w-[260px] rounded-full bg-arena-green/20 blur-[48px] animate-pulseGlow" />

      {/* orbiting ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute h-[220px] w-[220px] rounded-full border border-arena-green/25"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* ball */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        {/* ball body */}
        <div className="h-[120px] w-[120px] rounded-full bg-gradient-to-br from-[#9BE33D] to-[#6BBF1A] shadow-[0_0_40px_rgba(163,230,53,0.4)]">
          {/* seam lines */}
          <div className="absolute left-1/2 top-[15%] h-[70%] w-[2px] -translate-x-1/2 rounded-full bg-[#f5f5dc]/60" />
          <div className="absolute left-[15%] top-1/2 h-[2px] w-[70%] -translate-y-1/2 rounded-full bg-[#f5f5dc]/60" />
        </div>

        {/* orbiting dots */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div className="absolute -left-8 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-arena-green/60" />
          <div className="absolute -right-8 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-arena-lime/60" />
          <div className="absolute left-1/2 -top-8 -translate-x-1/2 h-2 w-2 rounded-full bg-arena-mint/60" />
        </motion.div>
      </motion.div>

      {/* sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-arena-mint"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
