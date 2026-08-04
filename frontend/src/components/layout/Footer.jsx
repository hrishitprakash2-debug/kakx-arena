import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { siteConfig, whatsappLink } from "@/data/site";
const quickLinks = [
  { href: "#sports", label: "Sports" },
  { href: "#academy", label: "Cricket Academy" },
  { href: "#booking", label: "Book a Slot" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];
function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* newsletter */}
      <div className="container-x border-b border-white/10 py-16">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div>
            <span className="eyebrow">Stay in the game</span>
            <h2 className="display-title mt-5 text-4xl sm:text-5xl">
              Get the <span className="text-arena-mint">latest</span> from the
              arena
            </h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setDone(true);
            }}
            className="flex w-full max-w-md items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1.5 pl-5 pr-1.5 transition-colors focus-within:border-arena-mint/50"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              aria-label="Email address"
              className="w-full min-w-0 bg-transparent py-2 text-base text-white outline-none placeholder:text-zinc-500"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-arena-mint px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(16,185,129,0.4)] active:scale-95"
            >
              {done ? "Done ✓" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>

      {/* main footer */}
      <div className="container-x grid justify-items-center gap-12 py-16 text-center sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:justify-items-start lg:text-left">
        {/* brand + contact */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a
            href="#top"
            className="flex items-baseline justify-center gap-2 lg:justify-start"
          >
            <span className="font-display text-2xl tracking-[0.06em] text-white">
              KAKX
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-arena-mint" />
          </a>
          <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-zinc-500 lg:mx-0">
            Wave City&apos;s premium sports destination — box cricket, football,
            badminton &amp; pickleball. Open 24 hours, floodlit every night.
          </p>
          <div className="mt-8 flex flex-col items-center gap-2 text-sm text-zinc-400 lg:items-start">
            <a
              href={`tel:${siteConfig.phone}`}
              className="transition-colors hover:text-arena-mint"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-arena-mint"
            >
              <InstagramIcon className="h-3.5 w-3.5" /> @kakx.arena
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> {siteConfig.address}
            </span>
          </div>
        </div>

        {/* nav */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Explore
          </span>
          <ul className="mx-auto mt-6 grid w-fit grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-1">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-lg uppercase tracking-wide text-white transition-colors hover:text-arena-mint"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* cta */}
        <div className="flex flex-col items-center lg:items-start">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Book your slot
          </span>
          <p className="mt-5 text-sm leading-relaxed text-zinc-500">
            Pick your sport, date and time — your booking goes straight to
            WhatsApp. We confirm within minutes.
          </p>
          <a
            href={whatsappLink("Hi KAKX Arena! I want to book a slot.")}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-6"
          >
            Book a Slot <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* giant wordmark */}
      <div className="container-x overflow-hidden pt-4 pb-8" aria-hidden>
        <h2
          className="font-display select-none text-center text-[15vw] uppercase leading-[1] tracking-wide text-transparent"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
        >
          KAKX ARENA
        </h2>
      </div>

      {/* bottom bar */}
      <div className="container-x flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
        <span className="text-xs text-zinc-600">
          © {new Date().getFullYear()} KAKX Arena — Fuel Your Play
        </span>
      </div>
    </footer>
  );
}
export { Footer as default };
