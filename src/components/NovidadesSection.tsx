"use client";

import { motion } from "framer-motion";
import { NEWS } from "@/lib/constants";
import {
  lineReveal,
  sectionContainer,
  sectionItem,
  viewportOnce,
} from "@/lib/motion";

export function NovidadesSection() {
  return (
    <motion.section
      id="novidades"
      className="bg-page-mid/80 px-3 py-8 sm:px-4 sm:py-10 md:py-20 lg:py-24"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={sectionContainer}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-1.5 font-logo text-xl tracking-widest text-white sm:mb-2 sm:text-2xl md:mb-3 md:text-3xl lg:mb-4 lg:text-4xl"
          variants={sectionItem}
        >
          NOVIDADES
        </motion.h2>
        <motion.div
          className="mb-5 h-0.5 w-12 bg-amber-500/80 sm:mb-6 sm:w-16 md:mb-10 lg:mb-12 origin-left"
          style={{ transformOrigin: "left" }}
          variants={lineReveal}
          aria-hidden
        />

        {[...NEWS].length === 0 ? (
          <motion.div
            className="rounded-xl border border-page-border/80 bg-page-surface/50 px-4 py-8 text-center sm:px-6 sm:py-10 md:px-8 md:py-12"
            variants={sectionItem}
          >
            <p className="text-lg font-medium text-zinc-300 sm:text-xl">Em breve</p>
            <p className="mt-2 text-sm text-zinc-500">Acompanhe nossas redes para novidades.</p>
          </motion.div>
        ) : (
          <ul className="space-y-3 sm:space-y-4">
            {NEWS.map((news, index) => (
              <motion.li key={`${news.title}-${index}`} variants={sectionItem}>
                <motion.a
                  href={news.href}
                  {...(news.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block rounded-xl border border-page-border/80 bg-page-surface/50 px-4 py-3 transition-colors hover:border-amber-500/40 hover:bg-page-mid hover:text-white sm:px-5 sm:py-4 md:px-6 md:py-5"
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 22 } }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="block font-medium text-white">{news.title}</span>
                  <span className="mt-1 block text-sm text-zinc-500">{news.date}</span>
                  {news.excerpt && (
                    <p className="mt-2 text-sm text-zinc-400">{news.excerpt}</p>
                  )}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.section>
  );
}
