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

export function MerchSection() {
  return (
    <motion.section
      id="merch"
      className="bg-page px-4 py-12 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:text-4xl"
          variants={item}
        >
          MERCH
        </motion.h2>
        <motion.div
          className="mb-6 h-0.5 w-16 bg-amber-500/80 sm:mb-8"
          variants={item}
          aria-hidden
        />
        <motion.p
          className="mb-8 text-zinc-400"
          variants={item}
        >
          Confira nossos produtos e links oficiais.
        </motion.p>
        <motion.div variants={item}>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="min-h-[48px] w-full transition-all hover:scale-105 sm:w-auto"
          >
          <a
            href={LINKS.aboutMe}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver mais em about.me"
          >
            Ver mais em about.me
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
