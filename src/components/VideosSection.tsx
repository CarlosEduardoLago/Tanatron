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

export function VideosSection() {
  return (
    <motion.section
      className="mx-auto max-w-3xl px-4 py-16 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <motion.h2
        className="mb-6 font-logo text-3xl tracking-widest text-white sm:text-4xl"
        variants={item}
      >
        CLIPES
      </motion.h2>
      <motion.p
        className="mb-8 text-zinc-400"
        variants={item}
      >
        Assista aos nossos clipes no YouTube.
      </motion.p>
      <motion.div variants={item}>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-red-500/50 text-red-500 hover:bg-red-500/10 hover:text-red-400"
        >
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver clipes no YouTube"
          >
            Ver clipes no YouTube
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
}
