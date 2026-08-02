import { motion } from "framer-motion";

/**
 * Ambient cricket ball for mobile hero — sits behind text, low opacity,
 * slow rotation. Pure CSS, zero JS dependencies, ~0 KB.
 */
export default function CricketBallAmbient() {
  return (
    <div className="pointer-events-none absolute -right-16 bottom-8 h-[240px] w-[240px] opacity-[0.12] sm:hidden">
      {/* glow */}
      <div className="absolute inset-0 rounded-full bg-arena-green/30 blur-[40px]" />

      {/* spinning ball */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[15%]"
      >
        {/* ball body */}
        <div className="relative h-full w-full rounded-full bg-gradient-to-br from-[#9BE33D] to-[#6BBF1A]">
          {/* seam - vertical */}
          <div className="absolute left-1/2 top-[10%] h-[80%] w-[2px] -translate-x-1/2 rounded-full bg-[#f5f5dc]/50" />
          {/* seam - horizontal */}
          <div className="absolute left-[10%] top-1/2 h-[2px] w-[80%] -translate-y-1/2 rounded-full bg-[#f5f5dc]/50" />
          {/* seam - diagonal */}
          <div
            className="absolute left-[20%] top-[20%] h-[2px] w-[60%] rounded-full bg-[#f5f5dc]/30"
            style={{ transform: "rotate(45deg)" }}
          />
          {/* seam - diagonal 2 */}
          <div
            className="absolute left-[20%] top-[20%] h-[2px] w-[60%] rounded-full bg-[#f5f5dc]/30"
            style={{ transform: "rotate(-45deg)" }}
          />
        </div>
      </motion.div>

      {/* faint orbit ring */}
      <div className="absolute inset-[5%] rounded-full border border-arena-green/10" />
    </div>
  );
}
