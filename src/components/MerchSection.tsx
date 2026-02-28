"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import { useReducedMotionContext } from "@/contexts/ReducedMotionContext";
import { sectionContainer, sectionContainerReduced, sectionItem, sectionItemReduced, cardHover, cardTap, springSoft } from "@/lib/motion";

export function MerchSection() {
  const reduced = useReducedMotionContext();
  const containerVariants = reduced ? sectionContainerReduced : sectionContainer;
  const itemVariants = reduced ? sectionItemReduced : sectionItem;

  return (
    <motion.section
      id="merch"
      className="overflow-x-clip bg-page px-4 py-12 md:py-24 lg:px-12 xl:px-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
    >
      <div className="mx-auto min-w-0 max-w-3xl lg:max-w-4xl">
        <motion.h2
          className="mb-2 font-logo text-2xl tracking-widest text-white sm:mb-3 sm:text-3xl md:text-4xl"
          variants={itemVariants}
        >
          MERCH
        </motion.h2>
        <motion.div
          className="mb-6 h-0.5 w-16 bg-amber-500/80 sm:mb-8"
          variants={itemVariants}
          aria-hidden
        />
        <motion.p
          className="mb-8 text-zinc-400"
          variants={itemVariants}
        >
          Confira nossos produtos e links oficiais.
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.div whileHover={cardHover} whileTap={cardTap} transition={springSoft}>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="min-h-[48px] w-full transition-all sm:w-auto"
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
        </motion.div>
      </div>
    </motion.section>
  );
}
