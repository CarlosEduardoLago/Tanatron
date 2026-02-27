"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import {
  lineReveal,
  sectionContainer,
  sectionItem,
  viewportOnce,
} from "@/lib/motion";

export function MerchSection() {
  return (
    <motion.section
      id="merch"
      className="bg-page px-3 py-8 sm:px-4 sm:py-10 md:py-20 lg:py-24"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={sectionContainer}
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-1.5 font-logo text-xl tracking-widest text-white sm:mb-2 sm:text-2xl md:mb-3 md:text-3xl lg:text-4xl"
          variants={sectionItem}
        >
          MERCH
        </motion.h2>
        <motion.div
          className="mb-4 h-0.5 w-12 bg-amber-500/80 sm:mb-6 sm:w-16 md:mb-8 origin-left"
          style={{ transformOrigin: "left" }}
          variants={lineReveal}
          aria-hidden
        />
        <motion.p
          className="mb-5 text-sm text-zinc-400 sm:mb-6 md:mb-8 md:text-base"
          variants={sectionItem}
        >
          Confira nossos produtos e links oficiais.
        </motion.p>
        <motion.div variants={sectionItem}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="min-h-[44px] w-full sm:min-h-[48px] sm:w-auto"
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
