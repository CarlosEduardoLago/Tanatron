"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { INSTAGRAM_POSTS, LINKS } from "@/lib/constants";
import { sectionContainer, sectionItem, sectionItemFromLeft, sectionItemFromRight, cardHover, cardTap, springSoft } from "@/lib/motion";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function InstagramSection() {
  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          const instgrm = (window as { instgrm?: { Embeds?: { process: () => void } } }).instgrm;
          instgrm?.Embeds?.process?.();
        }}
      />
      <motion.section
        id="instagram"
        className="overflow-x-clip bg-page-mid/80 px-4 py-12 md:py-24 lg:px-12 xl:px-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionContainer}
      >
        <div className="mx-auto min-w-0 max-w-6xl lg:max-w-7xl">
          <motion.h2
            className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:mb-4 md:text-4xl"
            variants={sectionItem}
          >
            INSTAGRAM
          </motion.h2>
          <motion.div
            className="mb-6 h-0.5 w-16 bg-amber-500/80 sm:mb-10 md:mb-12"
            variants={sectionItem}
            aria-hidden
          />
          <motion.div
            className="mb-8 flex min-w-0 flex-wrap items-center gap-4 sm:mb-10 md:mb-12"
            variants={sectionItem}
          >
            <motion.a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-violet-500/50 bg-violet-500/10 px-5 py-2.5 text-sm font-medium text-violet-400 transition hover:border-violet-500 hover:bg-violet-500/20 hover:text-violet-300"
              whileHover={cardHover}
              whileTap={cardTap}
              transition={springSoft}
            >
              <InstagramIcon className="h-5 w-5" />
              @tanatronband
            </motion.a>
            <motion.a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-page-border bg-page-surface/80 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-violet-500/50 hover:bg-page-mid hover:text-white"
              whileHover={cardHover}
              whileTap={cardTap}
              transition={springSoft}
            >
              Seguir no Instagram
            </motion.a>
          </motion.div>

          <div className="grid min-w-0 grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {INSTAGRAM_POSTS.map((postUrl, index) => (
              <motion.div
                key={postUrl}
                className="flex min-w-0 justify-center"
                variants={index % 2 === 0 ? sectionItemFromLeft : sectionItemFromRight}
                whileHover={cardHover}
                whileTap={cardTap}
                transition={springSoft}
              >
                <div className="instagram-embed-wrapper w-full max-w-[540px] overflow-hidden rounded-xl border border-page-border ring-2 ring-amber-500/20 shadow-lg shadow-black/50 transition-colors hover:border-amber-500/40 hover:shadow-amber-500/10">
                  <blockquote
                    className="instagram-media !m-0 !block min-w-0 max-w-full"
                    data-instgrm-permalink={postUrl}
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: 0,
                      borderRadius: 12,
                      margin: 0,
                      maxWidth: 540,
                      minWidth: 326,
                      padding: 0,
                      width: "99.375%",
                    }}
                  >
                    <a href={postUrl}>Ver no Instagram</a>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p className="mt-8 text-center text-sm text-zinc-500" variants={sectionItem}>
            Acompanhe o dia a dia da banda em{" "}
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 underline hover:text-violet-300"
            >
              @tanatronband
            </a>
          </motion.p>
        </div>
      </motion.section>
    </>
  );
}
