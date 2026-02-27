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
      className="section-padding bg-page"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={container}
    >
      <div className="section-container max-w-3xl">
        <motion.h2 className="section-title" variants={item}>
          MERCH
        </motion.h2>
        <motion.div className="section-line" variants={item} aria-hidden />

        <motion.p
          className="mb-6 text-sm text-zinc-400 sm:mb-8 md:text-base"
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
