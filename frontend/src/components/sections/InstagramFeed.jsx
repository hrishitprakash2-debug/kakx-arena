import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/data/site";

// 6 recent-looking posts from the gallery
const posts = [
  { src: "/images/g1.webp", alt: "Box cricket action at KAKX Arena" },
  { src: "/images/g7.webp", alt: "7v7 football turf action" },
  { src: "/images/g9.webp", alt: "Badminton court action" },
  { src: "/images/g5.webp", alt: "Indoor badminton court with KAKX branding" },
  { src: "/images/g3.webp", alt: "Cricket academy training session" },
  { src: "/images/g8.webp", alt: "KAKX Arena exterior" },
];

function InstagramFeed() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20">
      <div className="container-x relative">
        <div className="mb-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Follow the Action
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-title mt-4 text-5xl sm:text-6xl lg:text-7xl"
          >
            On <span className="text-gradient-green">Instagram</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-md text-sm text-zinc-400"
          >
            Daily highlights, match clips and behind-the-scenes from the arena.
          </motion.p>
        </div>

        {/* Instagram grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6"
        >
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
              }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={post.src}
                alt={post.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-arena-green/50 hover:bg-arena-green/10 hover:text-arena-green"
          >
            <Instagram className="h-4 w-4" />
            @kakx.arena
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export { InstagramFeed as default };
