"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import {
  sectionContainer,
  sectionContainerReduced,
  sectionItem,
  sectionItemReduced,
  viewportOnce,
} from "@/lib/motion";

export function MerchSection() {
  const reduceMotion = useReducedMotion();
  const container = reduceMotion ? sectionContainerReduced : sectionContainer;
  const item = reduceMotion ? sectionItemReduced : sectionItem;

  return (
    <motion.section
      id="merch"
      className="bg-page px-3 py-8 sm:px-4 sm:py-10 md:py-20 lg:py-24"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={container}
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-1.5 font-logo text-xl tracking-widest text-white sm:mb-2 sm:text-2xl md:mb-3 md:text-3xl lg:text-4xl"
          variants={item}
        >
          MERCH
        </motion.h2>
        <motion.div
          className="mb-4 h-0.5 w-12 bg-amber-500/80 sm:mb-6 sm:w-16 md:mb-8"
          variants={item}
          aria-hidden
        />
        <motion.p
          className="mb-5 text-sm text-zinc-400 sm:mb-6 md:mb-8 md:text-base"
          variants={item}
        >
          Confira nossos produtos e links oficiais.
        </motion.p>
        <motion.div variants={item}>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="min-h-[44px] w-full transition-transform duration-200 hover:scale-[1.02] sm:min-h-[48px] sm:w-auto"
          >
          <a
            href={LINKS.aboutMe}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver mais em about.me"
          >
            Ver mais em about.me
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
