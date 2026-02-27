"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function MusicSection() {
  return (
    <motion.section
      className="mx-auto min-w-0 max-w-3xl overflow-x-clip px-4 py-16 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <motion.h2
        className="mb-6 font-logo text-3xl tracking-widest text-white sm:text-4xl"
        variants={item}
      >
        MÚSICA
      </motion.h2>
      <motion.p
        className="mb-8 text-zinc-400"
        variants={item}
      >
        Ouça nossos trabalhos no Spotify.
      </motion.p>
      <motion.div variants={item}>
        <Button asChild size="lg" className="bg-[#1DB954] text-white hover:bg-[#1ed760]">
          <a
            href={LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvir no Spotify"
          >
            Ouvir no Spotify
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
