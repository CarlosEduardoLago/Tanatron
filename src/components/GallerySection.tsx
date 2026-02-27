"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import { sectionContainerFast, sectionItem, cardHover, cardTap } from "@/lib/motion";

export function GallerySection() {
  return (
    <motion.section
      id="galeria"
      className="bg-page px-4 py-12 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={sectionContainerFast}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:mb-4 md:text-4xl"
          variants={sectionItem}
        >
          GALERIA
        </motion.h2>
        <motion.div
          className="mb-6 h-0.5 w-16 bg-amber-500/80 sm:mb-10 md:mb-12"
          variants={sectionItem}
          aria-hidden
        />
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 md:gap-5">
          {GALLERY_IMAGES.map(({ src, alt }, index) => (
            <motion.div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-page-border transition-colors hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10"
              variants={sectionItem}
              whileHover={cardHover}
              whileTap={cardTap}
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
                className="absolute inset-0 rounded-lg opacity-0 ring-2 ring-amber-500/30 ring-offset-2 ring-offset-page transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
