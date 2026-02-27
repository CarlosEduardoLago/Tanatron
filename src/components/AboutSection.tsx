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
      className="section-padding bg-page"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={container}
    >
      <div className="section-container">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
          <div className="flex flex-col">
            <motion.h2 className="section-title" variants={item}>
              SOBRE
            </motion.h2>
            <motion.div className="section-line" variants={item} aria-hidden />
            <motion.div
              className="space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg"
              variants={item}
            >
              {ABOUT_LONG.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-page-border shadow-2xl"
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
              className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-inset ring-amber-500/20"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
