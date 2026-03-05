"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MERCH_IMAGES, LINKS } from "@/lib/constants";
import { useReducedMotionContext } from "@/contexts/ReducedMotionContext";
import { sectionContainer, sectionContainerReduced, sectionItem, sectionItemReduced, cardHover, cardTap, springSoft } from "@/lib/motion";

const getImageSrc = (src: string) =>
  process.env.NEXT_PUBLIC_BASE_PATH && src.startsWith("/")
    ? process.env.NEXT_PUBLIC_BASE_PATH + src
    : src;

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function MerchSection() {
  const reduced = useReducedMotionContext();
  const containerVariants = reduced ? sectionContainerReduced : sectionContainer;
  const itemVariants = reduced ? sectionItemReduced : sectionItem;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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
        id="merch"
        className="overflow-x-clip bg-page px-4 py-12 md:py-24 lg:px-12 xl:px-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        <div className="mx-auto min-w-0 max-w-6xl lg:max-w-5xl">
          <motion.h2
            className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:text-4xl"
            variants={itemVariants}
          >
            MERCH
          </motion.h2>
          <motion.div
            className="mb-6 h-0.5 w-16 bg-amber-500/80 sm:mb-8"
            variants={itemVariants}
            aria-hidden
          />
          <motion.p
            className="mb-8 text-zinc-400"
            variants={itemVariants}
          >
            Confira nossos produtos oficiais na Mad Rock Store.
          </motion.p>
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.a
              href={LINKS.madRockStore}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram da Mad Rock Store"
              className="inline-flex items-center gap-2 rounded-lg border border-violet-500/50 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-violet-400 transition hover:border-violet-500 hover:bg-violet-500/20 hover:text-violet-300"
              whileHover={reduced ? undefined : cardHover}
              whileTap={reduced ? undefined : cardTap}
              transition={springSoft}
            >
              <InstagramIcon className="h-5 w-5" />
              Mad Rock Store no Instagram
            </motion.a>
          </motion.div>
          <div className="grid min-w-0 grid-cols-2 gap-2 sm:gap-4 md:gap-5 lg:mx-auto lg:max-w-[640px] lg:gap-4 xl:gap-5">
            {MERCH_IMAGES.map(({ src, alt, aspectRatio }, index) => (
              <motion.div
                key={index}
                className="group"
                variants={itemVariants}
              >
                <div
                  className="relative cursor-pointer overflow-hidden rounded-lg border-2 border-page-border transition-colors hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10"
                  style={{ aspectRatio: aspectRatio ?? 4 / 3 }}
                  onClick={() => openLightbox(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
                  aria-label={`Ampliar: ${alt}`}
                >
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
                      style={{ objectPosition: "center center" }}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                      decoding="async"
                    />
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 ring-2 ring-amber-500/30 ring-offset-2 ring-offset-page transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </motion.div>
                </div>
              </motion.div>
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
              aria-label="Imagem ampliada do merch"
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
                  src={getImageSrc(MERCH_IMAGES[lightboxIndex].src)}
                  alt={MERCH_IMAGES[lightboxIndex].alt}
                  width={1200}
                  height={900}
                  className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain"
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
