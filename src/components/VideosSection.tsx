"use client";

import { motion } from "framer-motion";
import { VIDEOS, LINKS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function VideosSection() {
  return (
    <motion.section
      id="videos"
      className="bg-black px-3 py-8 sm:px-4 sm:py-10 md:py-20 lg:py-24"
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
          VÍDEOS
        </motion.h2>
        <motion.div
          className="mb-5 h-0.5 w-12 bg-amber-500/80 sm:mb-6 sm:w-16 md:mb-10 lg:mb-12"
          variants={item}
          aria-hidden
        />
        <motion.p className="mb-5 text-sm text-zinc-400 sm:mb-6 sm:text-base md:mb-10 lg:mb-12" variants={item}>
          Assista aos nossos clipes e apresentações no YouTube.
        </motion.p>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
          {VIDEOS.map((video, index) => (
            <motion.div
              key={`${video.id}-${index}`}
              className="flex flex-col gap-3"
              variants={item}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50">
                <iframe
                  title={video.title}
                  src={`https://www.youtube.com/embed/${video.id}`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-medium text-zinc-300 sm:text-base">{video.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4" variants={item}>
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-red-500/50 bg-red-500/10 px-5 py-2.5 text-sm font-medium text-red-400 transition hover:border-red-500 hover:bg-red-500/20 hover:text-red-300"
          >
            Assistir no YouTube
          </a>
          <span className="text-sm text-zinc-500">Para ver mais vídeos, acesse o canal TanatronOfficial.</span>
        </motion.div>
      </div>
    </motion.section>
  );
}
