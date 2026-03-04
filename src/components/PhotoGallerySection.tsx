"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GALLERY_PHOTOS } from "@/lib/constants";
import { useReducedMotionContext } from "@/contexts/ReducedMotionContext";
import {
  sectionContainerFast,
  sectionContainerReduced,
  sectionItem,
  sectionItemReduced,
  cardHover,
  cardTap,
  springSoft,
} from "@/lib/motion";

const getImageSrc = (src: string) =>
  process.env.NEXT_PUBLIC_BASE_PATH && src.startsWith("/")
    ? process.env.NEXT_PUBLIC_BASE_PATH + src
    : src;

export function PhotoGallerySection() {
  const reduced = useReducedMotionContext();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const containerVariants = reduced ? sectionContainerReduced : sectionContainerFast;
  const itemVariants = reduced ? sectionItemReduced : sectionItem;

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeLightbox]);

  return (
    <>
      <motion.section
        id="galeria"
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
            GALERIA
          </motion.h2>
          <motion.div
            className="mb-6 h-0.5 w-16 bg-amber-500/80 sm:mb-10 md:mb-12"
            variants={itemVariants}
            aria-hidden
          />
          <div className="grid min-w-0 grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 md:gap-5 lg:gap-6 xl:gap-8">
            {GALLERY_PHOTOS.map(({ src, alt }, index) => (
              <motion.button
                key={index}
                type="button"
                className="group relative aspect-[4/3] min-w-0 overflow-hidden rounded-lg border border-page-border transition-colors hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-page"
                variants={itemVariants}
                whileHover={cardHover}
                whileTap={cardTap}
                transition={springSoft}
                onClick={() => openLightbox(index)}
                aria-label={`Ampliar: ${alt}`}
              >
                <Image
                  src={getImageSrc(src)}
                  alt={alt}
                  fill
                  loading="lazy"
                  fetchPriority="low"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 rounded-lg opacity-0 ring-2 ring-amber-500/30 ring-offset-2 ring-offset-page transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <>
            <motion.div
              role="presentation"
              className="fixed inset-0 z-[80] bg-black/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeLightbox}
              aria-hidden
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Imagem ampliada da galeria"
              className="fixed inset-4 z-[90] flex items-center justify-center sm:inset-8 md:inset-12"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "tween", duration: 0.2 }}
              onClick={closeLightbox}
            >
              <div
                className="relative flex max-h-full max-w-full items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={getImageSrc(GALLERY_PHOTOS[lightboxIndex].src)}
                  alt={GALLERY_PHOTOS[lightboxIndex].alt}
                  width={1200}
                  height={900}
                  className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
                  sizes="(max-width: 1024px) 90vw, 1200px"
                />
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-lg bg-page-surface/90 text-white transition hover:bg-page-mid focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black sm:right-4 sm:top-4"
                aria-label="Fechar imagem"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
