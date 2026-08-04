import { motion, useScroll, useSpring } from "framer-motion";
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-arena-mint shadow-[0_0_12px_rgba(16,185,129,0.6)]"
      aria-hidden
    />
  );
}
export { ScrollProgress as default };
