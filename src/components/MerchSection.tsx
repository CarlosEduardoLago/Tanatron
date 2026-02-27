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
      className="bg-black px-3 py-8 sm:px-4 sm:py-10 md:py-20 lg:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-1.5 font-logo text-xl tracking-widest text-white sm:mb-2 sm:text-2xl md:mb-3 md:text-3xl lg:text-4xl"
          variants={item}
        >
          MERCH
        </motion.h2>
        <motion.div
          className="mb-4 h-0.5 w-12 bg-amber-500/80 sm:mb-6 sm:w-16 md:mb-8"
          variants={item}
          aria-hidden
        />
        <motion.p
          className="mb-5 text-sm text-zinc-400 sm:mb-6 md:mb-8 md:text-base"
          variants={item}
        >
          Confira nossos produtos e links oficiais.
        </motion.p>
        <motion.div variants={item}>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="min-h-[44px] w-full transition-all hover:scale-105 sm:min-h-[48px] sm:w-auto"
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
