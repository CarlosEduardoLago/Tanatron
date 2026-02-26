"use client";

import { motion } from "framer-motion";
import { NEWS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function NovidadesSection() {
  return (
    <motion.section
      id="novidades"
      className="bg-zinc-900/50 px-4 py-12 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:mb-4 md:text-4xl"
          variants={item}
        >
          NOVIDADES
        </motion.h2>
        <motion.div
          className="mb-8 h-0.5 w-16 bg-amber-500/80 sm:mb-10 md:mb-12"
          variants={item}
          aria-hidden
        />

        {NEWS.length === 0 ? (
          <motion.div
            className="rounded-xl border border-zinc-700/80 bg-zinc-900/30 px-6 py-10 text-center sm:px-8 sm:py-12"
            variants={item}
          >
            <p className="text-lg font-medium text-zinc-300 sm:text-xl">Em breve</p>
            <p className="mt-2 text-sm text-zinc-500">Acompanhe nossas redes para novidades.</p>
          </motion.div>
        ) : (
          <ul className="space-y-4">
            {NEWS.map((news, index) => (
              <motion.li key={`${news.title}-${index}`} variants={item}>
                <a
                  href={news.href}
                  {...(news.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block rounded-xl border border-zinc-700/80 bg-zinc-900/30 px-5 py-4 transition hover:border-amber-500/40 hover:bg-zinc-800/50 sm:px-6 sm:py-5"
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
