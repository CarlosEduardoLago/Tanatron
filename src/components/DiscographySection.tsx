"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DISCOGRAPHY, LINKS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function DiscographySection() {
  return (
    <motion.section
      id="discografia"
      className="bg-zinc-950 px-3 py-8 sm:px-4 sm:py-10 md:py-20 lg:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-1.5 font-logo text-xl tracking-widest text-white sm:mb-2 sm:text-2xl md:mb-3 md:text-3xl lg:mb-4 lg:text-4xl"
          variants={item}
        >
          DISCOGRAFIA
        </motion.h2>
        <motion.div
          className="mb-6 h-0.5 w-12 bg-amber-500/80 sm:mb-8 sm:w-16 md:mb-12 lg:mb-14"
          variants={item}
          aria-hidden
        />

        <div className="space-y-10 sm:space-y-14 md:space-y-20">
          {DISCOGRAPHY.map((album) => (
            <motion.article
              key={`${album.title}-${album.year}`}
              className="grid gap-4 sm:gap-6 md:grid-cols-[minmax(0,280px)_1fr] md:gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-10"
              variants={item}
            >
              <div className="flex flex-col gap-4 md:items-stretch">
                <div className="relative aspect-square w-full max-w-[240px] overflow-hidden rounded-lg border border-zinc-800 shadow-xl sm:max-w-[280px] md:max-w-none">
                  <Image
                    src={album.coverImage}
                    alt={`Capa ${album.title} — ${album.year}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 280px"
                  />
                </div>
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
                <div className="min-h-[280px] w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 sm:min-h-[352px] md:min-h-[380px]">
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

        <motion.div className="mt-6 text-center sm:mt-8 md:mt-12" variants={item}>
          <a
            href={LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-[#1ed760]/50 hover:bg-zinc-800 hover:text-white"
          >
            Ouvir tudo no Spotify
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
