"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import {
  galleryHoverScale,
  galleryTapScale,
  sectionContainer,
  sectionContainerReduced,
  sectionItem,
  sectionItemReduced,
  viewportTight,
} from "@/lib/motion";

export function GallerySection() {
  const reduceMotion = useReducedMotion();
  const container = reduceMotion ? sectionContainerReduced : sectionContainer;
  const item = reduceMotion ? sectionItemReduced : sectionItem;

  return (
    <motion.section
      id="galeria"
      className="section-padding bg-page-dark"
      initial="hidden"
      whileInView="show"
      viewport={viewportTight}
      variants={container}
    >
      <div className="section-container">
        <motion.h2 className="section-title" variants={item}>
          GALERIA
        </motion.h2>
        <motion.div className="section-line" variants={item} aria-hidden />

        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 md:gap-5">
          {GALLERY_IMAGES.map(({ src, alt }, index) => (
            <motion.div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-page-border transition-colors hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10"
              variants={item}
              whileHover={reduceMotion ? undefined : { scale: galleryHoverScale }}
              whileTap={reduceMotion ? undefined : { scale: galleryTapScale }}
              transition={{ duration: 0.2 }}
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
