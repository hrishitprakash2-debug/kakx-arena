import { featureMarquee, marqueeItems } from "@/data/site";

/**
 * Infinite scrolling ribbon.
 * `variant="display"`  → big display text with ✦ separators (hero ribbon)
 * `variant="features"` → muted mono-style labels with dot separators (mid-page ribbon)
 * `reverse` flips the scroll direction so paired ribbons run against each other.
 */
function Marquee({
  items = marqueeItems,
  variant = "display",
  reverse = false,
  speed = "28s",
}) {
  const row = [...items, ...items];
  return (
    <div
      className={`relative z-10 overflow-hidden border-y border-white/10 ${
        variant === "display" ? "bg-arena-panel py-5" : "py-4"
      }`}
    >
      <div
        className={`marquee-track flex w-max animate-marquee items-center whitespace-nowrap ${
          reverse ? "marquee-track-reverse" : ""
        }`}
        style={{ animationDuration: speed }}
      >
        {row.map((item, i) =>
          variant === "display" ? (
            <span
              key={i}
              className="mx-6 flex items-center gap-10 font-display text-2xl uppercase tracking-[0.15em] text-white sm:gap-12 sm:text-4xl"
            >
              <span>{item}</span>
              <span className="text-arena-mint">✦</span>
            </span>
          ) : (
            <span
              key={i}
              className="mx-8 flex items-center gap-16 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-arena-mint" />
            </span>
          ),
        )}
      </div>
    </div>
  );
}
export { Marquee as default };
export { featureMarquee };
