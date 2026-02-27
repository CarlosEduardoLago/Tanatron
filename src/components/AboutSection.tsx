"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ABOUT_LONG, ABOUT_IMAGE } from "@/lib/constants";
import {
  sectionContainer,
  sectionContainerReduced,
  sectionItem,
  sectionItemReduced,
  viewportOnce,
} from "@/lib/motion";

const aboutImageSrc =
  process.env.NEXT_PUBLIC_BASE_PATH && ABOUT_IMAGE.startsWith("/")
    ? process.env.NEXT_PUBLIC_BASE_PATH + ABOUT_IMAGE
    : ABOUT_IMAGE;

export function AboutSection() {
  const reduceMotion = useReducedMotion();
  const container = reduceMotion ? sectionContainerReduced : sectionContainer;
  const item = reduceMotion ? sectionItemReduced : sectionItem;

  return (
    <motion.section
      id="sobre"
      className="bg-page-dark px-3 py-6 sm:px-4 sm:py-8 md:py-12 lg:py-20"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={container}
    >
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 md:gap-16 md:items-center">
        <div className="flex flex-col">
          <motion.h2
            className="mb-1.5 font-logo text-xl tracking-widest text-white sm:mb-2 sm:text-2xl md:mb-3 md:text-3xl lg:text-4xl"
            variants={item}
          >
            SOBRE
          </motion.h2>
          <motion.div
            className="mb-3 h-0.5 w-12 bg-amber-500/80 sm:mb-4 sm:w-16 md:mb-6"
            variants={item}
            aria-hidden
          />
          <motion.div className="space-y-3 text-sm text-zinc-400 sm:space-y-4 sm:text-base md:text-lg md:leading-relaxed" variants={item}>
            {ABOUT_LONG.split("\n\n").map((paragraph, i) => (
              <p key={i}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-page-border shadow-2xl sm:aspect-[16/10] md:aspect-[4/3]"
          variants={item}
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
