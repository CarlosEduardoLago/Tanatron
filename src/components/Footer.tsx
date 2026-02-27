"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BAND_NAME } from "@/lib/constants";
import { fadeInVariants, fadeInVariantsReduced, viewportOnce } from "@/lib/motion";

export function Footer() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? fadeInVariantsReduced : fadeInVariants;

  return (
    <motion.footer
      className="border-t border-page-border bg-page px-4 py-8 text-center text-sm text-zinc-500 sm:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
    >
      <p>
        {BAND_NAME} &mdash; {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
}
