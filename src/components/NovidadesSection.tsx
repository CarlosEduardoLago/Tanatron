"use client";

import { motion } from "framer-motion";
import { NEWS } from "@/lib/constants";
import { sectionContainerFast, sectionItem, cardHover, cardTap } from "@/lib/motion";

export function NovidadesSection() {
  return (
    <motion.section
      id="novidades"
      className="overflow-x-hidden bg-page-mid/80 px-4 py-12 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionContainerFast}
    >
      <div className="mx-auto min-w-0 max-w-4xl">
        <motion.h2
          className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:mb-4 md:text-4xl"
          variants={sectionItem}
        >
          NOVIDADES
        </motion.h2>
        <motion.div
          className="mb-8 h-0.5 w-16 bg-amber-500/80 sm:mb-10 md:mb-12"
          variants={sectionItem}
          aria-hidden
        />

        {[...NEWS].length === 0 ? (
          <motion.div
            className="rounded-xl border border-page-border/80 bg-page-surface/50 px-6 py-10 text-center sm:px-8 sm:py-12"
            variants={sectionItem}
          >
            <p className="text-lg font-medium text-zinc-300 sm:text-xl">Em breve</p>
            <p className="mt-2 text-sm text-zinc-500">Acompanhe nossas redes para novidades.</p>
          </motion.div>
        ) : (
          <ul className="min-w-0 space-y-4">
            {NEWS.map((news, index) => (
              <motion.li key={`${news.title}-${index}`} variants={sectionItem}>
                <motion.a
                  whileHover={cardHover}
                  whileTap={cardTap}
                  transition={{ duration: 0.2 }}
                  href={news.href}
                  {...(news.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block rounded-xl border border-page-border/80 bg-page-surface/50 px-5 py-4 transition hover:border-amber-500/40 hover:bg-page-mid sm:px-6 sm:py-5"
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
