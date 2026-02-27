"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function GallerySection() {
  return (
    <motion.section
      id="galeria"
      className="bg-black px-3 py-8 sm:px-4 sm:py-10 md:py-20 lg:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-1.5 font-logo text-xl tracking-widest text-white sm:mb-2 sm:text-2xl md:mb-3 md:text-3xl lg:mb-4 lg:text-4xl"
          variants={item}
        >
          GALERIA
        </motion.h2>
        <motion.div
          className="mb-4 h-0.5 w-12 bg-amber-500/80 sm:mb-6 sm:w-16 md:mb-10 lg:mb-12"
          variants={item}
          aria-hidden
        />
        <div className="grid grid-cols-2 gap-1.5 sm:gap-3 md:grid-cols-3 md:gap-5">
          {GALLERY_IMAGES.map(({ src, alt }, index) => (
            <motion.div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-zinc-800 transition-colors hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10"
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
