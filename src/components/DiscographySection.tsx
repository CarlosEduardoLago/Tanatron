"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { DISCOGRAPHY, LINKS } from "@/lib/constants";
import {
  sectionContainer,
  sectionContainerReduced,
  sectionItem,
  sectionItemReduced,
  viewportOnce,
  hoverScaleSubtle,
  tapScale,
} from "@/lib/motion";

export function DiscographySection() {
  const reduceMotion = useReducedMotion();
  const container = reduceMotion ? sectionContainerReduced : sectionContainer;
  const item = reduceMotion ? sectionItemReduced : sectionItem;

  return (
    <motion.section
      id="discografia"
      className="section-padding bg-page-dark"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={container}
    >
      <div className="section-container">
        <motion.h2 className="section-title" variants={item}>
          DISCOGRAFIA
        </motion.h2>
        <motion.div className="section-line" variants={item} aria-hidden />

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {DISCOGRAPHY.map((album) => (
            <motion.article
              key={`${album.title}-${album.year}`}
              className="grid gap-6 md:grid-cols-[280px_1fr] md:gap-8 lg:grid-cols-[320px_1fr] lg:gap-10"
              variants={item}
            >
              {/* Coluna esquerda: capa + info do álbum */}
              <div className="flex flex-col gap-4">
                <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-lg border border-page-border shadow-xl sm:max-w-[280px] md:mx-0 md:max-w-none">
                  <Image
                    src={album.coverImage}
                    alt={`Capa ${album.title} — ${album.year}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, 320px"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {album.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {album.type} &bull; {album.year}
                  </p>
                  {album.lineUp && (
                    <p className="mt-3 text-xs leading-relaxed text-zinc-500 md:text-sm">
                      {album.lineUp}
                    </p>
                  )}
                </div>
              </div>

              {/* Coluna direita: player Spotify + tracklist no mesmo bloco */}
              <div className="min-w-0">
                <div className="overflow-hidden rounded-lg border border-page-border bg-page-surface/80">
                  <iframe
                    title={`Ouvir ${album.title} no Spotify`}
                    src={album.embedUrl}
                    className="h-[300px] w-full sm:h-[380px] md:h-[400px]"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                  {Array.isArray(album.tracklist) && album.tracklist.length > 0 && (
                    <div className="border-t border-page-border px-4 py-3 sm:px-5 sm:py-4">
                      <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500 sm:text-sm">
                        Tracklist
                      </h4>
                      <ol className="list-inside list-decimal columns-1 space-y-1 text-sm text-zinc-400 sm:columns-2">
                        {album.tracklist.map((track, i) => (
                          <li key={i}>{track}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div className="mt-8 text-center sm:mt-10 md:mt-12" variants={item}>
          <motion.a
            href={LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-page-border bg-page-surface/80 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-[#1ed760]/50 hover:bg-page-mid hover:text-white"
            whileHover={reduceMotion ? undefined : hoverScaleSubtle}
            whileTap={reduceMotion ? undefined : tapScale}
          >
            Ouvir tudo no Spotify
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
