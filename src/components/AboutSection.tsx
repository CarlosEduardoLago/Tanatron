"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ABOUT_LONG, ABOUT_IMAGE } from "@/lib/constants";
import { sectionContainer, sectionItem, cardHover, cardTap } from "@/lib/motion";

const aboutImageSrc =
  process.env.NEXT_PUBLIC_BASE_PATH && ABOUT_IMAGE.startsWith("/")
    ? process.env.NEXT_PUBLIC_BASE_PATH + ABOUT_IMAGE
    : ABOUT_IMAGE;

export function AboutSection() {
  return (
    <motion.section
      id="sobre"
      className="bg-page-dark px-4 pt-6 pb-12 md:pt-10 md:pb-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionContainer}
    >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:gap-16 md:items-center">
        <div className="flex flex-col">
          <motion.h2
            className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:text-4xl"
            variants={sectionItem}
          >
            SOBRE
          </motion.h2>
          <motion.div
            className="mb-4 h-0.5 w-16 bg-amber-500/80 sm:mb-6"
            variants={sectionItem}
            aria-hidden
          />
          <motion.div className="space-y-4 text-base text-zinc-400 sm:text-lg sm:leading-relaxed" variants={sectionItem}>
            {ABOUT_LONG.split("\n\n").map((paragraph, i) => (
              <p key={i}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative aspect-[16/10] overflow-hidden rounded-lg border border-page-border shadow-2xl md:aspect-[4/3]"
          variants={sectionItem}
          whileHover={cardHover}
          whileTap={cardTap}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={aboutImageSrc}
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
