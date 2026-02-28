"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import { sectionContainerFast, sectionItem, cardHover, cardTap, springSoft } from "@/lib/motion";

const getGallerySrc = (src: string) =>
  process.env.NEXT_PUBLIC_BASE_PATH && src.startsWith("/")
    ? process.env.NEXT_PUBLIC_BASE_PATH + src
    : src;

export function GallerySection() {
  return (
    <motion.section
      id="galeria"
      className="overflow-x-clip bg-page px-4 py-12 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={sectionContainerFast}
    >
      <div className="mx-auto min-w-0 max-w-6xl">
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
        <div className="grid min-w-0 grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 md:gap-5">
          {GALLERY_IMAGES.map(({ src, alt, objectPosition }, index) => (
            <motion.div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-page-border transition-colors hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10"
              variants={sectionItem}
              whileHover={cardHover}
              whileTap={cardTap}
              transition={springSoft}
            >
              <Image
                src={getGallerySrc(src)}
                alt={alt}
                fill
                loading="lazy"
                fetchPriority="low"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAQEBAT8A/9k="
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                style={objectPosition ? { objectPosition } : undefined}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                decoding="async"
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
