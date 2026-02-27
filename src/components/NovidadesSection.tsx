"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NEWS } from "@/lib/constants";
import {
  sectionContainer,
  sectionContainerReduced,
  sectionItem,
  sectionItemReduced,
  viewportOnce,
} from "@/lib/motion";

export function NovidadesSection() {
  const reduceMotion = useReducedMotion();
  const container = reduceMotion ? sectionContainerReduced : sectionContainer;
  const item = reduceMotion ? sectionItemReduced : sectionItem;

  return (
    <motion.section
      id="novidades"
      className="section-padding bg-page-dark"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={container}
    >
      <div className="section-container max-w-4xl">
        <motion.h2 className="section-title" variants={item}>
          NOVIDADES
        </motion.h2>
        <motion.div className="section-line" variants={item} aria-hidden />

        {[...NEWS].length === 0 ? (
          <motion.div
            className="rounded-xl border border-page-border/80 bg-page-surface/50 px-6 py-10 text-center md:py-12"
            variants={item}
          >
            <p className="text-lg font-medium text-zinc-300 sm:text-xl">Em breve</p>
            <p className="mt-2 text-sm text-zinc-500">Acompanhe nossas redes para novidades.</p>
          </motion.div>
        ) : (
          <ul className="space-y-3 sm:space-y-4">
            {NEWS.map((news, index) => (
              <motion.li key={`${news.title}-${index}`} variants={item}>
                <a
                  href={news.href}
                  {...(news.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block rounded-xl border border-page-border/80 bg-page-surface/50 px-5 py-4 transition hover:border-amber-500/40 hover:bg-page-mid hover:text-white sm:px-6 sm:py-5"
                >
                  <span className="block font-medium text-white">{news.title}</span>
                  <span className="mt-1 block text-sm text-zinc-500">{news.date}</span>
                  {news.excerpt && (
                    <p className="mt-2 text-sm text-zinc-400">{news.excerpt}</p>
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.section>
  );
}
