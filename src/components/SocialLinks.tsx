"use client";

import { motion } from "framer-motion";
import { LINKS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function SocialLinks() {
  return (
    <motion.section
      id="redes"
      className="bg-zinc-900/50 px-4 py-12 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-6 font-logo text-2xl tracking-widest text-white sm:mb-8 sm:text-3xl md:text-4xl"
          variants={item}
        >
          REDES
        </motion.h2>
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-6"
          variants={item}
        >
        <a
          href={LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[48px] flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-zinc-300 transition hover:scale-105 hover:border-violet-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label="Instagram @tanatronband"
        >
          Instagram
        </a>
        <a
          href={LINKS.aboutMe}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[48px] flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-zinc-300 transition hover:scale-105 hover:border-violet-500/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label="about.me/tanatron"
        >
          about.me / tanatron
        </a>
      </motion.div>
      </div>
    </motion.section>
  );
}
