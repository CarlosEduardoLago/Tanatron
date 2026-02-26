"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_LONG, ABOUT_IMAGE } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    <motion.section
      className="bg-zinc-950 px-4 py-16 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 md:items-center">
        <div className="flex flex-col">
          <motion.h2
            className="mb-6 font-logo text-3xl tracking-widest text-white sm:text-4xl"
            variants={item}
          >
            SOBRE
          </motion.h2>
          <motion.div className="space-y-4 text-zinc-400" variants={item}>
            {ABOUT_LONG.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative aspect-[16/10] overflow-hidden rounded-lg border border-zinc-800 shadow-2xl md:aspect-[4/3]"
          variants={item}
        >
          <Image
            src={ABOUT_IMAGE}
            alt="Tanatron — Death Metal São Luís/MA"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 rounded-lg ring-2 ring-inset ring-amber-500/20 pointer-events-none"
            aria-hidden
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
