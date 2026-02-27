"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import {
  cardHover,
  cardTap,
  lineReveal,
  sectionContainer,
  sectionItem,
  viewportTight,
} from "@/lib/motion";

export function GallerySection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="galeria"
      className="bg-page px-3 py-8 sm:px-4 sm:py-10 md:py-20 lg:py-24"
      initial="hidden"
      whileInView="show"
      viewport={viewportTight}
      variants={sectionContainer}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-1.5 font-logo text-xl tracking-widest text-white sm:mb-2 sm:text-2xl md:mb-3 md:text-3xl lg:mb-4 lg:text-4xl"
          variants={sectionItem}
        >
          GALERIA
        </motion.h2>
        <motion.div
          className="mb-4 h-0.5 w-12 bg-amber-500/80 sm:mb-6 sm:w-16 md:mb-10 lg:mb-12 origin-left"
          style={{ transformOrigin: "left" }}
          variants={lineReveal}
          aria-hidden
        />
        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 md:grid-cols-3 md:gap-5">
          {GALLERY_IMAGES.map(({ src, alt }, index) => (
            <motion.div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-page-border transition-colors hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10"
              variants={sectionItem}
              whileHover={reduceMotion ? undefined : cardHover}
              whileTap={reduceMotion ? undefined : cardTap}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div
                className="absolute inset-0 rounded-lg opacity-0 ring-2 ring-amber-500/30 ring-offset-2 ring-offset-black transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
