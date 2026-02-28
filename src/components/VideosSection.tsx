"use client";

import { motion } from "framer-motion";
import { VIDEOS, LINKS } from "@/lib/constants";
import { EmbedErrorBoundary } from "@/components/EmbedErrorBoundary";
import { useReducedMotionContext } from "@/contexts/ReducedMotionContext";
import { sectionContainer, sectionContainerReduced, sectionItem, sectionItemFromLeft, sectionItemFromRight, sectionItemReduced, cardHover, cardTap, springSoft } from "@/lib/motion";

export function VideosSection() {
  const reduced = useReducedMotionContext();
  const containerVariants = reduced ? sectionContainerReduced : sectionContainer;
  const itemVariants = reduced ? sectionItemReduced : sectionItem;
  return (
    <motion.section
      id="videos"
      className="overflow-x-clip bg-page px-4 py-12 md:py-24 lg:px-12 xl:px-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
    >
      <div className="mx-auto min-w-0 max-w-6xl lg:max-w-7xl">
        <motion.h2
          className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:mb-4 md:text-4xl"
          variants={itemVariants}
        >
          VÍDEOS
        </motion.h2>
        <motion.div
          className="mb-8 h-0.5 w-16 bg-amber-500/80 sm:mb-10 md:mb-12"
          variants={itemVariants}
          aria-hidden
        />
        <motion.p className="mb-8 text-zinc-400 sm:mb-10 md:mb-12" variants={itemVariants}>
          Assista aos nossos clipes e apresentações no YouTube.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {VIDEOS.map((video, index) => (
            <motion.div
              key={`${video.id}-${index}`}
              className="flex min-w-0 flex-col gap-3"
              variants={reduced ? sectionItemReduced : (index % 2 === 0 ? sectionItemFromLeft : sectionItemFromRight)}
              whileHover={cardHover}
              whileTap={cardTap}
              transition={springSoft}
            >
              <EmbedErrorBoundary
                fallbackTitle={video.title}
                fallbackHref={`https://www.youtube.com/watch?v=${video.id}`}
                fallbackLinkText="Assistir no YouTube"
              >
                <div className="relative aspect-video w-full max-w-full min-w-0 overflow-hidden rounded-lg border border-page-border bg-page-surface/80">
                  <iframe
                    title={video.title}
                    src={`https://www.youtube.com/embed/${video.id}`}
                    className="absolute inset-0 h-full w-full max-w-full"
                    style={{ maxWidth: "100%", minWidth: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </EmbedErrorBoundary>
              <h3 className="text-sm font-medium text-zinc-300 sm:text-base">{video.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-8 flex min-w-0 flex-wrap items-center justify-center gap-4 sm:mt-10 sm:flex-row" variants={itemVariants}>
          <motion.a
            href={LINKS.youtube}
            whileHover={cardHover}
            whileTap={cardTap}
            transition={springSoft}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center rounded-lg border border-red-500/50 bg-red-500/10 px-5 py-2.5 text-sm font-medium text-red-400 transition hover:border-red-500 hover:bg-red-500/20 hover:text-red-300"
          >
            Assistir no YouTube
          </motion.a>
          <span className="min-w-0 break-words text-center text-sm text-zinc-500 sm:text-left">Para ver mais vídeos, acesse o canal TanatronOfficial.</span>
        </motion.div>
      </div>
    </motion.section>
  );
}
