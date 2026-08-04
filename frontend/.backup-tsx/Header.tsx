import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "@/data/site";

const links = [
  { href: "#sports", label: "Sports" },
  { href: "#academy", label: "Academy" },
  { href: "#booking", label: "Booking" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/85 backdrop-blur-xl max-md:bg-black/95 max-md:backdrop-blur-none"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between sm:h-20">
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src="/icon.png"
              alt=""
              className="h-8 w-8 rounded-lg border border-arena-green/30 sm:h-9 sm:w-9"
            />
            <span className="flex items-baseline gap-1 font-display text-2xl tracking-wider sm:text-3xl">
              <span className="text-gradient-green">KAKX</span>
              <span className="text-white">ARENA</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-arena-green"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink("Hi KAKX Arena! I want to book a slot.")}
              data-wa-label="header-book"
              target="_blank"
              rel="noreferrer"
              className="btn-primary hidden !px-5 !py-2.5 !text-xs sm:inline-flex"
            >
              Book Now
            </a>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-black/95 lg:hidden"
          >
            <div className="container-x flex h-16 items-center justify-between">
              <span className="flex items-center gap-2.5">
                <img src="/icon.png" alt="" className="h-8 w-8 rounded-lg border border-arena-green/30" />
                <span className="font-display text-2xl tracking-wider">
                  <span className="text-gradient-green">KAKX</span>
                  <span className="text-white">ARENA</span>
                </span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="container-x flex flex-1 flex-col justify-center gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.35, ease: "easeOut" as const }}
                  className="font-display py-3 text-5xl uppercase tracking-wide text-zinc-200 transition-colors hover:text-arena-green"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={whatsappLink("Hi KAKX Arena! I want to book a slot.")}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35, ease: "easeOut" as const }}
                className="btn-primary mt-8 w-full"
              >
                Book Now on WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
