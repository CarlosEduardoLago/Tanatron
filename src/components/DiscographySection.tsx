"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DISCOGRAPHY, LINKS } from "@/lib/constants";
import {
  hoverScaleSubtle,
  lineReveal,
  sectionContainer,
  sectionItem,
  tapScale,
  viewportOnce,
} from "@/lib/motion";

export function DiscographySection() {
  return (
    <motion.section
      id="discografia"
      className="bg-page-dark px-3 py-8 sm:px-4 sm:py-10 md:py-20 lg:py-24"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={sectionContainer}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-1.5 font-logo text-xl tracking-widest text-white sm:mb-2 sm:text-2xl md:mb-3 md:text-3xl lg:mb-4 lg:text-4xl"
          variants={sectionItem}
        >
          DISCOGRAFIA
        </motion.h2>
        <motion.div
          className="mb-6 h-0.5 w-12 bg-amber-500/80 sm:mb-8 sm:w-16 md:mb-12 lg:mb-14 origin-left"
          style={{ transformOrigin: "left" }}
          variants={lineReveal}
          aria-hidden
        />

        <div className="space-y-10 sm:space-y-14 md:space-y-20">
          {DISCOGRAPHY.map((album) => (
            <motion.article
              key={`${album.title}-${album.year}`}
              className="grid gap-4 sm:gap-6 md:grid-cols-[minmax(0,280px)_1fr] md:gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-10"
              variants={sectionItem}
            >
              <div className="flex flex-col gap-4 md:items-stretch">
                <motion.div
                  className="relative aspect-square w-full max-w-[240px] overflow-hidden rounded-lg border border-page-border shadow-xl sm:max-w-[280px] md:max-w-none"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <Image
                    src={album.coverImage}
                    alt={`Capa ${album.title} — ${album.year}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 280px"
                  />
                </motion.div>
                <div className="flex flex-col justify-center gap-1 md:justify-start">
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{album.title}</h3>
                  <p className="text-sm text-zinc-500">
                    {album.type} • {album.year}
                  </p>
                  {album.lineUp && (
                    <p className="mt-2 text-xs text-zinc-500 leading-relaxed md:mt-3 md:text-sm">
                      {album.lineUp}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-6 min-w-0">
                <div className="min-h-[280px] w-full overflow-hidden rounded-lg border border-page-border bg-page-surface/80 sm:min-h-[352px] md:min-h-[380px]">
                  <iframe
                    title={`Ouvir ${album.title} no Spotify`}
                    src={album.embedUrl}
                    className="h-full min-h-[280px] w-full sm:min-h-[352px] md:min-h-[380px]"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
                {Array.isArray(album.tracklist) && album.tracklist.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-500">Tracklist</h4>
                    <ol className="list-inside list-decimal space-y-1 text-sm text-zinc-400">
                      {album.tracklist.map((track, i) => (
                        <li key={i}>{track}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div className="mt-6 text-center sm:mt-8 md:mt-12" variants={sectionItem}>
          <motion.a
            href={LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-page-border bg-page-surface/80 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-[#1ed760]/50 hover:bg-page-mid hover:text-white"
            whileHover={hoverScaleSubtle}
            whileTap={tapScale}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Ouvir tudo no Spotify
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
