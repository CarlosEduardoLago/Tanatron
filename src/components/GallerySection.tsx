"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MEMBROS_IMAGES } from "@/lib/constants";
import { useReducedMotionContext } from "@/contexts/ReducedMotionContext";
import { sectionContainerFast, sectionContainerReduced, sectionItem, sectionItemReduced, cardHover, cardTap, springSoft } from "@/lib/motion";

const getImageSrc = (src: string) =>
  process.env.NEXT_PUBLIC_BASE_PATH && src.startsWith("/")
    ? process.env.NEXT_PUBLIC_BASE_PATH + src
    : src;

export function GallerySection() {
  const reduced = useReducedMotionContext();
  const containerVariants = reduced ? sectionContainerReduced : sectionContainerFast;
  const itemVariants = reduced ? sectionItemReduced : sectionItem;

  return (
    <motion.section
      id="membros"
      className="overflow-x-clip bg-page px-4 py-12 md:py-24 lg:px-12 xl:px-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={containerVariants}
    >
      <div className="mx-auto min-w-0 max-w-6xl lg:max-w-7xl">
        <motion.h2
          className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:mb-4 md:text-4xl"
          variants={itemVariants}
        >
          MEMBROS
        </motion.h2>
        <motion.div
          className="mb-6 h-0.5 w-16 bg-amber-500/80 sm:mb-10 md:mb-12"
          variants={itemVariants}
          aria-hidden
        />
        <div className="grid min-w-0 grid-cols-2 gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          {MEMBROS_IMAGES.map(({ src, alt, name, role, objectPosition }, index) => (
            <motion.div
              key={index}
              className="group flex flex-col"
              variants={itemVariants}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-page-border transition-colors hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10">
                <motion.div
                  className="relative h-full w-full"
                  whileHover={cardHover}
                  whileTap={cardTap}
                  transition={springSoft}
                >
                  <Image
                    src={getImageSrc(src)}
                    alt={alt}
                    fill
                    loading="lazy"
                    fetchPriority="low"
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
              </div>
              <div className="mt-2 flex min-w-0 flex-col sm:mt-3">
                <span className="truncate font-logo text-sm tracking-wide text-white sm:text-base">
                  {name}
                </span>
                <span className="truncate text-xs text-amber-500/90 sm:text-sm">
                  {role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
