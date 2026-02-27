"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function ListenSection() {
  return (
    <motion.section
      id="onde-ouvir"
      className="overflow-x-clip bg-page-dark px-4 py-12 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <div className="mx-auto min-w-0 max-w-5xl">
        <motion.h2
          className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:mb-4 md:text-4xl"
          variants={card}
        >
          ONDE OUVIR
        </motion.h2>
        <motion.div
          className="mb-6 h-0.5 w-16 bg-amber-500/80 sm:mb-10 md:mb-12"
          variants={card}
          aria-hidden
        />
        <div className="grid gap-4 md:grid-cols-2 md:gap-8">
          <motion.div
            className="group relative overflow-hidden rounded-xl border border-page-border bg-page-surface/80 p-5 transition-all hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 md:p-8"
            variants={card}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-4 inline-flex rounded-lg bg-[#1DB954]/20 p-3 text-[#1ed760]">
              <SpotifyIcon className="h-8 w-8" />
            </div>
            <h3 className="mb-2 font-semibold uppercase tracking-wide text-white">
              Spotify
            </h3>
            <p className="mb-6 text-zinc-400">
              Ouça nossos trabalhos completos no Spotify.
            </p>
            <Button
              asChild
              size="lg"
              className="min-h-[48px] w-full bg-[#1DB954] text-white transition-all hover:scale-[1.02] hover:bg-[#1ed760] sm:w-auto"
            >
              <a
                href={LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvir no Spotify"
              >
                Ouvir no Spotify
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-xl border border-page-border bg-page-surface/80 p-5 transition-all hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10 md:p-8"
            variants={card}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-4 inline-flex rounded-lg bg-red-500/20 p-3 text-red-500">
              <YoutubeIcon className="h-8 w-8" />
            </div>
            <h3 className="mb-2 font-semibold uppercase tracking-wide text-white">
              YouTube
            </h3>
            <p className="mb-6 text-zinc-400">
              Assista aos nossos clipes e vídeos no YouTube.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-[48px] w-full border-red-500/50 text-red-500 transition-all hover:scale-[1.02] hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 sm:w-auto"
            >
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver clipes no YouTube"
              >
                Ver no YouTube
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
