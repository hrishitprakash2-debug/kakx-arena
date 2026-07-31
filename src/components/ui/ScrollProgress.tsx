"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gradient scroll-progress bar pinned to the top. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-arena-green via-arena-lime to-arena-mint"
      aria-hidden
    />
  );
}
